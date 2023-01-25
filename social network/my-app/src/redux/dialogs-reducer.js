const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Svetay' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Dimych' },
        { id: 5, name: 'Victo' },
        { id: 6, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        // messages: [...state.messages]
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.newMessageBody = "";
            stateCopy.messages.push({ id: 6, message: body });
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const upDateNewMessageBodyActionCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;