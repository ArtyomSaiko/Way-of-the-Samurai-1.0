import React from 'react';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Dialogs />
           {/*} <Profile />*/}
        </div>);
}

export default App;