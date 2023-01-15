import React from 'react';
import { addPostActionCreator, upDateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = upDateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  return (<MyPosts upDateNewPostText={onPostChange}
    addPost={addPost} />)

}

export default MyPostsContainer;