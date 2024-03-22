import React from 'react'
import '../../../styles/Card.css'

export default function Card({name, icon, count }) {
  return (
    <div className='card'>
        <div>
            <div style={{marginBottom:'15px'}}>{name}</div>
            <div style={{color:'red', fontWeight:'bold'}}>{count}</div>
        </div>
        <div>
            {icon}
        </div>
    </div>
  )
}
