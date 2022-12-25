import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost} />
        </div>)
}

export default Profile;