import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Tabs from '../../components/Tabs'
    import { setCurrentPage, setShowModalDetail } from '../../store/actions/todolist'
import Finished from '../../views/Finished'
import Unfinished from '../../views/Unfinished'
import './style.css'

const ListPage = () => {
  const [currentTab, setCurrentTab] = useState('unfinish')
  const dispatch = useDispatch()
  const { showModalDetail, idDetail, dataFinish, dataUnfinish } = useSelector(state => state.todolist)
  const allData = [...dataFinish, ...dataUnfinish]
  const [form, setForm] = useState({
    id: 0,
    title: '',
    description: '',
    status: 0,
    createdAt: ''
  }) 

  const tabs = [
    {
      label: 'Belum Selesai',
      value: 'unfinish'
    },
    {
      label: 'Selesai',
      value: 'finish'
    }
  ]

  const onChangeTab = (item) => {
    setCurrentTab(item.value)
  }

  const onAddItem = () => {
    dispatch(setCurrentPage('form-create'))
  }

  const onHideModal = () => {
    dispatch(setShowModalDetail(false))
  }

  useEffect(() => {
    if (idDetail) {
      const selectItem = allData.find(item => item.id === idDetail)
      if (selectItem) setForm(selectItem)
    }
  }, [idDetail])

  return (
    <div>
      <Modal isShow={showModalDetail} onClick={onHideModal}>
        <div className='modal'>
          <h2 className='title-modal'>{form.title}</h2>
          <p>Description: {form.description}</p>
          <p>Status: {form.status === 1 ? "Sudah Selesai": "Belum Selesai"}</p>
          <p>Last Modified: {form.createdAt}</p>
        </div>
      </Modal>
      <div className='list-page'>
        <h1 className='title'>Todo List app</h1>
        <Tabs itemsTab={tabs} currentTab={currentTab} onClick={onChangeTab} />
        {currentTab === 'finish' ? <Finished /> : <Unfinished />}

        <div className='button-add'>
          <Button text="+" variant="circle" onClick={onAddItem} />
        </div>
      </div>
    </div>
  )
}

export default ListPage
