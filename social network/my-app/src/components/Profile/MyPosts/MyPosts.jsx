import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'He, how are you?', likesCount: 10 },
    { id: 2, message: 'It\s, my first post', likesCount: 23 },
  ]

  let postsElements = posts.map(p => <Posts message={p.message} like={p.likesCount} />);

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
        {postsElements}
      </div>
    </div>)
}

export default MyPosts;