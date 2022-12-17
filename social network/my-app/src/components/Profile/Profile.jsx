import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = () => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts />
    </div>)
}

export default Profile;