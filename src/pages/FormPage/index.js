import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import Toggle from "../../components/Toggle";
import { setCurrentPage, setDataFinish, setDataUnfinish } from "../../store/actions/todolist";
import './style.css'

const FormPage = (props) => {
  const { title, currentPage } = props
  const dispatch = useDispatch()
  const { idDetail, dataFinish, dataUnfinish } = useSelector(state => state.todolist)
  const allData = [...dataFinish, ...dataUnfinish]
  const [form, setForm] = useState({
    id: 0,
    title: '',
    description: '',
    status: 0,
    createdAt: ''
  }) 

  const onChangeInput = (key, value) => {
    setForm(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const onClickToggle = (val) => {
    const value = val === true ? 0 : 1;
    setForm(prevState => ({ ...prevState, status: value }))
  }

  const onBack = () => {
    dispatch(setCurrentPage('list'))
  }

  const onClickPrimary = () => {
    if (currentPage === 'form-create') {
      const idAll = allData.map(item => item.id)
      const biggestId = Math.max.apply(null, idAll);
      
      const dates = new Date()
      const newDate = dates.toLocaleDateString("id-ID", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).split(' ')
      const date = newDate[0].split("/").reverse().join("-")
      const time = newDate[1].split('.').join(":")

      const payload = {
        ...form,
        id: biggestId + 1,
        createdAt: `${date} ${time}`
      }

      if (form.status === 1) {
        const result = [payload, ...dataFinish]
        dispatch(setDataFinish(result))
        onBack()
      } else {
        const result = [payload, ...dataUnfinish]
        dispatch(setDataUnfinish(result))
        onBack()
      }
    } else {
      const oldData = allData.filter(item => item.id !== form.id)
      const newData = [form, ...oldData]

      const dataUnfinish = newData.filter(item => item.status === 0)
      const dataFinish = newData.filter(item => item.status === 1)

      dispatch(setDataFinish(dataFinish))
      dispatch(setDataUnfinish(dataUnfinish))
      onBack()
    }
  }

  useEffect(() => {
    if (idDetail) {
      const selectItem = allData.find(item => item.id === idDetail)
      if (selectItem) {
        setForm(prevState => {
          return {
            ...prevState,
            id: selectItem.id,
            title: selectItem.title,
            description: selectItem.description,
            status: selectItem.status,
            createdAt: selectItem.createdAt
          }
        })
      }
    }
  }, [idDetail])

  return (
    <div className="wrapper-form">
      <h2 className="title-form">{title}</h2>

      <div className="form">
        <TextInput
          name="title"
          label="Title"
          value={form.title}
          placeholder="Input Title"
          onChange={onChangeInput}
        />
        <TextInput
          name="description"
          label="Description"
          value={form.description}
          placeholder="Input Description"
          onChange={onChangeInput}
        />
        <Toggle label="Status" active={Boolean(form.status)} onClick={onClickToggle} />
      </div>


      <div className="section-btn-cta">
        <Button text="Back" variant="line" onClick={onBack} />
        <Button text="Create" onClick={onClickPrimary} />
      </div>
    </div>
  )
}

export default FormPage
