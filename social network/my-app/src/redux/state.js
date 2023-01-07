let store = {
    _state : {
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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log ('State')
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    upDateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;