import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import CardBoard from './components/CardBoard';
import Selector from './components/Selector';

const App = () => {
    // TODO def props
    const [gameOver, setGameOver] = useState(true);

    const launchGame = () => {
        setGameOver(false);
    }

    const stopGame = () => {
        setGameOver(true);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {gameOver ? <Selector callback={launchGame}/> : <CardBoard callback={stopGame}/>}
            </header>
        </div>
    );
}

export default App;
