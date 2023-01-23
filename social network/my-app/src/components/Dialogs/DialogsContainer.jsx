import React from 'react';
import { sendMessageActionCreator, upDateNewMessageBodyActionCreator, } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';


const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState().dialogsPage;
            let onSendMessegeClick = () => {
                store.dispatch(sendMessageActionCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(upDateNewMessageBodyActionCreator(body));
            }
            return <Dialogs upDateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessegeClick}
                dialogsPage={state} />
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;