import React, { useEffect, useState } from 'react'
import './style.css'

const TextInput = (props) => {
  const { name, value, label, placeholder, onChange } = props
  const [inputValue, setInputValue] = useState(value)

  const onChangeInput = (event, name) => {
    onChange(name, event.target.value)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className='wrapper-input'>
      <span className='label-field'>{label}</span>
      <input
        value={inputValue}
        className='input'
        placeholder={placeholder}
        onChange={(e) => onChangeInput(e, name)}
      />
    </div>
  )
}

export default TextInput
