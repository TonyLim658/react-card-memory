import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// utils
import {shuffleArray} from './utils';
// Components
import CardBoard from './components/CardBoard';
import Selector from './components/Selector';
// Images
import img1 from './images/boarding_pass.jpg';
import img2 from './images/code.png';
import img3 from './images/nook.jpg';
import img4 from './images/qr_code.png';
import img5 from './images/todd_ross.jpg';


const cardIndex = [img1, img2, img3, img4, img5];
let cardImg: string[] = [];

const App = () => {
    // TODO def props
    const [gameOver, setGameOver] = useState(true);

    const launchGame = (e: React.MouseEvent<HTMLButtonElement>) => {
        const numberPairs: number = Number(e.currentTarget.value)
        cardImg = cardIndex.slice(0, numberPairs);
        cardImg = cardImg.concat(cardImg);
        cardImg = shuffleArray(cardImg);
        setGameOver(false);
    }

    const stopGame = () => {
        setGameOver(true);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {gameOver ? <Selector callback={launchGame}/> : <CardBoard callback={stopGame} cardImg={cardImg}/>}
            </header>
        </div>
    );
}

export default App;
