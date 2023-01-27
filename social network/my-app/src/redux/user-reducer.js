const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', cuontry: 'Belsrus'}},
        { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', cuontry: 'Russia'}},
        { id: 3, followed: false, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', cuontry: 'Ukraine'}}
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

export const followAC = () => ({ type: FOLLOW })
export const unfollowAC = () =>
    ({ type: UNFOLLOW, newText: text })

export default userReducer;