import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/index'
import { setDataUnfinish } from '../../store/actions/todolist'
import './style.css'

const Unfinished = () => {
  const { dataUnfinish } = useSelector(state => state.todolist)
  const dispatch = useDispatch()

  const onRemoveItem = (val) => {
    const result = dataUnfinish.filter(item => item.id !== val)
    dispatch(setDataUnfinish(result))
  }

  return (
    <div className='wrapper-unfinish'>
      {dataUnfinish.length === 0 && <span>Data kosong</span>}
      {dataUnfinish.map((item, idx) => {
        return (
          <Card
            id={item.id}
            title={item.title}
            description={item.description}
            key={idx}
            onDeleteItem={onRemoveItem}
          />
        )
      })}
    </div>
  )
}

export default Unfinished