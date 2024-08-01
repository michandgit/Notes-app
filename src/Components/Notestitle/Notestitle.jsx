import React from 'react'
import './Notestitle.css'

const Notestitle = (props) => {
  return (
    <div className="grp-notes"  >
        <div className="circle" style={{background : props.color}}  onClick={props.onClick}>MN</div>
        <p onClick={props.onClick}>{props.groupName} </p>
    </div>
  )
}

export default Notestitle
