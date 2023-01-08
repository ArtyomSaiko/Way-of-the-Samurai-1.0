import React from 'react';
import { sendMessageActionCreator, upDateNewMessageBodyActionCreator,} from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessegeClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(upDateNewMessageBodyActionCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div> {messagesElements} </div>
                    <div>
                        <div><textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea></div>
                        <div><button onClick={onSendMessegeClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;