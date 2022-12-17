import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Posts message = 'He, how are you?' like = '10' />
        <Posts message = "It's, my first post" like = '23' />
        </div>
    </div>)
}

export default MyPosts;