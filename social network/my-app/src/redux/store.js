import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'He, how are you?', likesCount: 10 },
                { id: 2, message: 'It\s, my first post', likesCount: 23 },
            ],
            newPostText: 'it-kamasytra'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;