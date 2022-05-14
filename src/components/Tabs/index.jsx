import React from 'react'
import './style.css'

const Tabs = (props) => {
  const { currentTab, itemsTab, onClick } = props

  const onChangeTab = (item) => {
    onClick(item)
  }

  return (
    <div className='wrapper-tabs'>
      {itemsTab.map((item, idx) => {
        return (
          <div
            className={currentTab === item.value ? 'tabs active' : 'tabs'}
            key={idx}
            onClick={() => onChangeTab(item)}
          >
            {item.label}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs