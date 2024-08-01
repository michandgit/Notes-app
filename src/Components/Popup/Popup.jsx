import React, { useState } from 'react'
import './Popup.css'
import ReactDOM from 'react-dom';


const Popup = ({ onClose , createGroup }) => {
    const [groupName , setGroupName]= useState('');
    const [color , setColor] = useState('#000000');
   

    const handleCreate = () =>{
        if (groupName.trim() !== '') {
            createGroup({title:groupName ,color:color});
        }
    };


  return ReactDOM.createPortal(
    <div className='popup'>
      <div className='box'>
        <h2>Create New Group</h2>
        <div className='data1'>
            <label >Group Name:</label>
            <input type="text"
             value={groupName} 
            onChange={(e)=> setGroupName(e.target.value)}
            placeholder = "Enter Group Name"

             />
        </div>
        <div className='data2'>
            <label >Choose Color:</label>
            <div onClick = {(e)=> setColor('#B38BFA')} className="clr1"></div>
            <div onClick = {(e)=> setColor('#FF79F2')} className="clr2"></div>
            <div onClick = {(e)=> setColor('##43E6FC')} className="clr3"></div>
            <div onClick = {(e)=> setColor('#F19576')} className="clr4"></div>
            <div onClick = {(e)=> setColor('#0047FF')} className="clr5"></div>
            <div onClick = {(e)=> setColor('#6691FF')} className="clr6"></div>
        </div>
        <div className="btns">
        <button onClick={handleCreate}>Create</button>
        <button onClick={onClose}>Close</button>
        </div>
       
      </div>
    </div>,
    document.body
  )
}

export default Popup
