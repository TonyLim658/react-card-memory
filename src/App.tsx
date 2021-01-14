import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CardBoard from './components/CardBoard';
import Selector from './components/Selector';

const App = () => {
    // TODO def props
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Selector/>
                <CardBoard/>
                
            </header>
        </div>
    );
}

export default App;
