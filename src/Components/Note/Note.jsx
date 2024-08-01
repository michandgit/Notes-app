
import React  from 'react'
import './Note.css'

const Note = (props) => {
   
  return (
    <div className='note'>
      <p>{props.content}</p>
      <div className="bottom-right">

        <span>{props.date}</span>
        <span className='dot'></span>
        <span>{props.time}</span>
        
      </div>
    </div>
  )
}

export default Note
