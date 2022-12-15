import React from 'react';
import s from './Nav.module.css';

const Nav = ()=>{
    return <nav className={s.nav}>
    <div className ={s.item}>
       <a href='/profile'>Profil</a> 
    </div>
    <div className ={ `${s.item} ${s.active}`}>
       <a href='/dialogs'>Massages</a> 
    </div>
    <div className ={s.item}>
       <a href='/news'>News</a> 
    </div>
    <div className ={s.item}>
       <a  href='/music'>Music</a> 
    </div>
    <div className ={s.item}>
       <a href='/setting'>Settings</a> 
    </div>
</nav>
}

export default Nav;