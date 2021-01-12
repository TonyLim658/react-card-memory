import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CardBoard from './components/CardBoard';
// TODO set import for images

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CardBoard/>
                
            </header>
        </div>
    );
}

export default App;
