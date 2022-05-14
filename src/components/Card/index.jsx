import React from 'react'
import IconTrash from '../../assets/icons/trash.svg'
import IconGlass from '../../assets/icons/glass.svg'
import IconEdit from '../../assets/icons/edit.svg'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setDetailID, setShowModalDetail } from '../../store/actions/todolist'
import './style.css'

const Card = (props) => {
  const { id, title, description, hideDelete, onDeleteItem } = props
  const dispatch = useDispatch()

  const onRemoveItem = () => {
    onDeleteItem(id)
  }

  const onEditItem = (val) => {
    dispatch(setCurrentPage('form-edit'))
    dispatch(setDetailID(val))
  }

  const onDetailItem = (val) => {
    dispatch(setDetailID(val))
    dispatch(setShowModalDetail(true))
  }

  return (
    <div className='card-wrapper'>
      <div className='content-card'>
        <span className='card-title'>{title}</span>
        <span className='card-description'>{description}</span>
      </div>
      <div className='btn-cta'>
        <div className='button'>
          <img src={IconEdit} alt='Edit' onClick={() => onEditItem(id)} />
        </div>
        <div className='button' onClick={() => onDetailItem(id)}>
          <img src={IconGlass} alt='Detail'/>
        </div>
        {!hideDelete && (
          <div className='button' onClick={() => onRemoveItem(id)}>
            <img src={IconTrash} alt='Delete'/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
