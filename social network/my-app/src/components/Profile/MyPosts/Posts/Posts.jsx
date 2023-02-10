import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg' />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  )
}

export default Posts;