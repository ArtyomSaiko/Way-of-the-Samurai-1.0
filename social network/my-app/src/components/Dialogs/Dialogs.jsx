import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Andrey" id="1" />
                    <DialogItem name="Sveta" id="2" />
                    <DialogItem name="Sasha" id="3" />
                    <DialogItem name="Dimych" id="4" />
                    <DialogItem name="Victor" id="5" />
                    <DialogItem name="Valera" id="6" />
                </div>
                <div className={s.messages}>
                    <Message message="Hi" />
                    <Message message="How is you" />
                    <Message message="Yo" />
                    <Message message="Yo" />
                    <Message message="Yo" />
                </div>
            </div>
        </div>
    )
}
export default Dialogs;