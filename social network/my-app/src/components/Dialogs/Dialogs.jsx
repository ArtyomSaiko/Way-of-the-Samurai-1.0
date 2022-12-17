import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to="/dialog/1"> Andrey </NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog/2">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog/3">Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog/4">Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog/5">Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialog/6">Valera</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hi</div>
                    <div className={s.dialog}>How is you</div>
                    <div className={s.dialog}>You</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;