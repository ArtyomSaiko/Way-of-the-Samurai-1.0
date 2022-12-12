import React from 'react';
import s from './Nav.module.css';
//  <div className ={ `${s.item} ${s.active}`}> если у нас нужно 2 класса применить
const Nav = ()=>{
    return <nav className={s.nav}>
    <div className ={s.item}>
       <a>Profil</a> 
    </div>
    <div className ={ `${s.item} ${s.active}`}>
       <a>Massages</a> 
    </div>
    <div className ={s.item}>
       <a>News</a> 
    </div>
    <div className ={s.item}>
       <a>Music</a> 
    </div>
    <div className ={s.item}>
       <a>Settings</a> 
    </div>
</nav>
}

export default Nav;