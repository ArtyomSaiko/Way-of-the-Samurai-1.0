import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/dialogs/1"> Andrey </NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem />
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/6">Valera</NavLink>
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