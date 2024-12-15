import React from "react";
import "./Sidebar.css";
import { useState,useContext } from "react";
import { Context } from "../Context/Context";


const Sidebar = () => {
  const {hideName,category,setCategory}= useContext(Context)


  return (
    <div className={`sidebar  ${hideName && "small-width"}`}>
      <ul className="sidebar-menu">
        <li className={`menu-item ${category===0 && "active"}`} onClick={()=>setCategory(0)} >
          <i className="fas fa-home"></i> {!hideName &&`Home`}
        </li>
        <li className={`menu-item ${category===20 && "active"}`}  onClick={()=>setCategory(20)}>
          <i className="fas fa-gamepad"></i>{!hideName &&`Gaming`}
        </li>
        <li className={`menu-item ${category===2 && "active"}`} onClick={()=>setCategory(2)}>
          <i className="fas fa-car"></i>{!hideName &&`Automobile`}
        </li>
        <li className={`menu-item ${category===17 && "active"}`} onClick={()=>setCategory(17)}>
          <i className="fas fa-basketball-ball"></i>{!hideName &&`Sports`}
        </li>
        <li className={`menu-item ${category===24 && "active"}`} onClick={()=>setCategory(24)}>
          <i className="fas fa-tv"></i>{!hideName &&`Entertainment`}
        </li>
        <li className={`menu-item ${category===28 && "active"}`} onClick={()=>setCategory(28)}>
          <i className="fas fa-microchip"></i>{!hideName &&`Technology`}
        </li>
        <li className={`menu-item ${category===10 && "active"}`} onClick={()=>setCategory(10)}>
          <i className="fas fa-music"></i>{!hideName &&`Music`}
        </li>
        <li className={`menu-item ${category===22 && "active"}`} onClick={()=>setCategory(22)}>
          <i className="fas fa-blog"></i>{!hideName &&`Blogs`}
        </li>
        <li className={`menu-item ${category===25 && "active"}`} onClick={()=>setCategory(25)}>
          <i className="fas fa-newspaper"></i>{!hideName &&`News`}
        </li>
      </ul>
      <hr className="divider" />
      <div className="subscriptions">
        <h3 className="subscriptions-title">{!hideName &&`Subscribed`}</h3>
        <ul className="subscriptions-list">
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="PewDiePie" />
            {!hideName &&`PewDiePie`}
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="MrBeast" />
            {!hideName &&`Mrbeast`}
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="Justin Bieber" />
            {!hideName &&`Justin Beiber`}
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="5-Minute Crafts" />
            {!hideName &&`5-minutes Craft`}
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="Nas Daily" />
            {!hideName &&`Nas Daily`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
