import React, { useEffect, useState } from 'react'
import './style.css'

const Button = (props) => {
  const { text = 'Click', variant, onClick } = props
  const [btnClass, setBtnClass] = useState('button-wrapper')

  const onBtnClick = () => {
    onClick()
  }

  useEffect(() => {
    if (variant) {
      setBtnClass(`button-wrapper ${variant}`)
    }
  }, [variant])

  return (
    <button className={btnClass} onClick={onBtnClick}>
      <span>{text}</span>
    </button>
  )
}

export default Button
