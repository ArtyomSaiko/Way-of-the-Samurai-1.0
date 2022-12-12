import React from 'react';
import MyPosts from './MyPosts/Posts/MyPosts.jsx';
import s from './Profile.module.css';

const Profile = ()=>{
    return <div className={s.content}>
    <div>
    <img src='https://zastavok.net/main/auto/1423524421.jpg' />
    </div>
    <div>
        ava + text
    </div>
    <MyPosts />
 </div>
}

export default Profile;