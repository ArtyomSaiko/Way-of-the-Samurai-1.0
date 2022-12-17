import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://zastavok.net/main/auto/1423524421.jpg' />
            </div>
            <div className={s.descriptionBlok}>
                ava + text
            </div>
        </div>)
}

export default ProfileInfo;