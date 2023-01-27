const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        { id: 1, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', cuontry: 'Belsrus'}},
        { id: 2, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', cuontry: 'Russia'}},
        { id: 3, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', cuontry: 'Ukraine'}}
    ],
    newPostText: 'it-kamasytra'
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const upDateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default userReducer;