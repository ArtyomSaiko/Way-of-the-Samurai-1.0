import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'He, how are you?', likesCount: 10 },
  { id: 2, message: 'It\s, my first post', likesCount: 23 },
]

let dialogs = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Svetay' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Dimych' },
  { id: 5, name: 'Victo' },
  { id: 6, name: 'Valera' },
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is you" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
