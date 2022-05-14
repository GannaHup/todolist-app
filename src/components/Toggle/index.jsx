import React from 'react'
import './style.css'

const Toggle = (props) => {
  const { label, active, onClick } = props

  const onClickToggle = (val) => {
    onClick(val)
  }

  return (
    <div className='toggle-wrapper'>
      <span className='label-toggle'>{label}</span>
      <div
        className={active ? 'toggle active' : 'toggle'}
        onClick={() => onClickToggle(active)}
      >
        <div className={active ? 'circle-toggle-active' : 'circle-toggle'}></div>
      </div>
    </div>
  )
}

export default Toggle
