import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://instagramis.ru/wp-content/uploads/dimas-blog.jpg',
                followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: { city: 'Minsk', cuontry: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://instagramis.ru/wp-content/uploads/dimas-blog.jpg',
                followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', cuontry: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://instagramis.ru/wp-content/uploads/dimas-blog.jpg',
                followed: false, fullName: 'Andrey', status: 'I am a boss too', location: { city: 'Kiev', cuontry: 'Ukraine' }
            }
        ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}> UNFOLLOW </button>
                        : <button onClick={() => { props.follow(u.id) }}> FOLLOW </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;