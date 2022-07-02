import React from "react";
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
              <NavLink to='/profile' className= { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>  
            </div>
            <div className={s.item}>
            <NavLink to='/posts' className= { navData => navData.isActive ? s.active : s.item }> Posts</NavLink> 
            </div>
            <div className={s.item}>
            <NavLink to='/messages' className= { navData => navData.isActive ? s.active : s.item }>Messages</NavLink> 
            </div>
            <div className={s.item}>
              <NavLink to='/friends' className= { navData => navData.isActive ? s.active : s.item }> Friends</NavLink>  
            </div>
            <div className={s.item}>
              <NavLink to='/news' className= { navData => navData.isActive ? s.active : s.item }>News</NavLink>  
            </div>
        </div>
    )
}
export default Navbar;