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

    let dailogData =[
        {id: 1, name:'Andrey'},
        {id: 2, name:'Svetay'},
        {id: 3, name:'Sasha'},
        {id: 4, name:'Dimych'},
        {id: 5, name:'Victo'},
        {id: 6, name:'Valera'},
    ]

    let messagesData =[
        {id: 1, message:"Hi"},
        {id: 2, message:"How is you"},
        {id: 3, message:"Yo"},
        {id: 4, message:"Yo"},
        {id: 5, message:"Yo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dailogData[0].name} id={dailogData[0].id} />
                    <DialogItem name={dailogData[1].name} id={dailogData[1].id} />
                    <DialogItem name={dailogData[2].name} id={dailogData[2].id} />
                    <DialogItem name={dailogData[3].name} id={dailogData[3].id} />
                    <DialogItem name={dailogData[4].name} id={dailogData[4].id} />
                    <DialogItem name={dailogData[5].name} id={dailogData[5].id} />
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message} id={dailogData[0].id} />
                    <Message message={messagesData[1].message} id={dailogData[1].id} />
                    <Message message={messagesData[2].message} id={dailogData[2].id} />
                    <Message message={messagesData[3].message} id={dailogData[3].id} />
                    <Message message={messagesData[4].message} id={dailogData[4].id} />
                </div>
            </div>
        </div>
    )
}
export default Dialogs;