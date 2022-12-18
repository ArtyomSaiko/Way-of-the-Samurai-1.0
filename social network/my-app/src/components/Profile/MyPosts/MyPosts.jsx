import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

  let postData = [
    { id: 1, message: 'He, how are you?', likesCount: 10 },
    { id: 2, message: 'It\s, my first post', likesCount: 23 },
  ]

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Posts message={postData[0].message} like={postData[0].likesCount} />
        <Posts message={postData[1].message} like={postData[1].likesCount} />
      </div>
    </div>)
}

export default MyPosts;