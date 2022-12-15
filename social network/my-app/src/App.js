import React from 'react';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from './components/News/News';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dialogs" element={<Dialogs />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;