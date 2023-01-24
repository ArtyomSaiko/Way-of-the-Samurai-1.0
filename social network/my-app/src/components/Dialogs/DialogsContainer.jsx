import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, upDateNewMessageBodyActionCreator, } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';


let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        upDateNewMessageBody: () => {
            dispatch(sendMessageActionCreator());
        },
        sendMessage: (body) => {
            dispatch(upDateNewMessageBodyActionCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;