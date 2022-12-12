import React from 'react';
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.item}>
      <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg' />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Posts;