import React from "react";
import s from './Sidebar.module.css'

const Sidebar = () => {
    return(
        <div className={s.sidebar}>
            <div>
                <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            </div>
            <div> 
             Information about user
            </div>
        </div>
    )
}

export default Sidebar;