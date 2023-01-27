const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: { city: 'Minsk', cuontry: 'Belsrus' } },
        { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', cuontry: 'Russia' } },
        { id: 3, followed: false, fullName: 'Andrey', status: 'I am a boss too', location: { city: 'Kiev', cuontry: 'Ukraine' } }
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) =>
    ({ type: UNFOLLOW, userId })

export default userReducer;