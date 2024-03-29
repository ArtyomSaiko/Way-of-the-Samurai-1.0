import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
   
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profil</NavLink>
         </div>
         <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Massages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
         </div>
      </nav>
   )
}

export default Nav;