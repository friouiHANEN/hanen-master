
import React from 'react'
import Education from './Education'
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div >
      <Education />
      <div className="sidebarr">
      <ul>
      {SidebarData.map((val, key) => {
        return (
          <li key={key} onClick={()=> {window.location.pathname = val.link}}>
          {" "}
          <div>{val.icon}</div>{" "}
          <div>{val.title}</div>
          
          </li>
        );
      })}
      </ul>
      </div>
      </div> 
  );
    }

export default Sidebar