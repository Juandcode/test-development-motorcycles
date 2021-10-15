import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Home from "./pages/homepage"

type props = {
    uniqueId: string
}

function App({uniqueId}: props) {
    return (
        <Home uniqueId={uniqueId}/>
    );
}

export default App;
