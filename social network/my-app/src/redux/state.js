let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'He, how are you?', likesCount: 10 },
            { id: 2, message: 'It\s, my first post', likesCount: 23 },
        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        messege: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
}
export default state;