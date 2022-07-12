import React from 'react'

const Bar = ({props}) => {
  return (
    <div className='bar'>
        <div className="info">
            <span>{props.name}</span>
            <span>{props.level}%</span>
        </div>
        <div className = {props.style}></div>
    </div>
  )
}

export default Bar