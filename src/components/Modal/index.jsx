import React from 'react'
import './style.css'

const Modal = (props) => {
  const { children, isShow, onClick } = props

  const onHideModal = () => {
    onClick()
  }

  if (isShow) {
    return (
      <div className='wrapper-modal' onClick={onHideModal}>
        {children}
      </div>
    )
  }
}

export default Modal
