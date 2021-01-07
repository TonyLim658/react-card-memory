import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Card from './components/Card'
import CardBoard from './components/CardBoard';
// TODO set import for images

const App = () => {

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

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
