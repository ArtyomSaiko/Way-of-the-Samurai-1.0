import React from 'react';
import { sendMessageActionCreator, upDateNewMessageBodyActionCreator, } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessegeClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(upDateNewMessageBodyActionCreator(body));
    }
    return <Dialogs upDateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessegeClick}
        dialogsPage={state} />
}

export default DialogsContainer;