import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Card from './components/Card'
// TODO set import for images

const App = () => {

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Card
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    revealed={false}
                />
                <Card
                    callback={checkAnswer}
                    imagePath='./images/master_seal.jpg'
                    revealed={true}
                />
            </header>
        </div>
    );
}

export default App;
