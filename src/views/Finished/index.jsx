import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import './style.css'

const Finished = () => {
  const { dataFinish } = useSelector(state => state.todolist)

  return (
    <div className='wrapper-finish'>
      {dataFinish.length === 0 && <span>Data kosong</span>}
      {dataFinish.map((item, idx) => {
        return (
          <Card
            id={item.id}
            title={item.title}
            description={item.description}
            key={idx}
            hideDelete
          />
        )
      })}
    </div>
  )
}

export default Finished
