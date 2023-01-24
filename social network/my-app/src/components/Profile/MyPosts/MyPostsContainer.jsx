import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, upDateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upDateNewPostText: (text) => {
      let action = upDateNewPostTextActionCreator(text);
      dispatch(action);
    },
      addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}
  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

  export default MyPostsContainer;