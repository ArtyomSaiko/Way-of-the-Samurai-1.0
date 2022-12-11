import React from 'react';
import s from './Profile.module.css';

const Profile = ()=>{
    return <div className={s.content}>
    <div>
    <img src='https://zastavok.net/main/auto/1423524421.jpg' />
    </div>
    <div>
        ava + text
    </div>
    <div>
        my post
        <div>
        new post
        </div>
      <div className ={s.post}>
        <div className ={s.item}>
        post 1
        </div>
        <div className ={s.item}>
        post 2
        </div>
      </div>
    </div>
</div>
}

export default Profile;