import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Posts message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch ({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch (action);
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>)
}

export default MyPosts;