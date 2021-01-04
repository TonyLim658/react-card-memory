import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Card from './components/Card'

const App = () => {

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO complete
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
      </header>
    </div>
  );
}

export default App;
