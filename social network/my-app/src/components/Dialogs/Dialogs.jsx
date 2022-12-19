import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Svetay' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Dimych' },
        { id: 5, name: 'Victo' },
        { id: 6, name: 'Valera' },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;