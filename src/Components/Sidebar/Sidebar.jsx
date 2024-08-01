import React, { useState } from "react";
import "./Sidebar.css";
import Notestitle from "../Notestitle/Notestitle";
import Popup from "../Popup/Popup";

const Sidebar = ({ groups, addGroup, selectGroup }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
 

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

   const createGroup = (group) => {
    addGroup(group);
    closePopup();
  };



  return (
    <div className="sidebar">
      <h1>Pocket Notes</h1>
      <div className="sidebar-grps">
        {groups.map((group, index) => (
          <Notestitle  key={index} groupName={group.title}  color={group.color}   onClick={() => selectGroup(group.title)} />
        ))}
      </div>

     
        <span className="add-button" onClick={openPopup}>
          +
        </span>
        {isPopupVisible && <Popup onClose={closePopup} createGroup={createGroup}/>}
    
    </div>
  );
};

export default Sidebar;
