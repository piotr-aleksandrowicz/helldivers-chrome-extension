import React, { useState } from 'react';

import StratagemsGame from './stragem/stratagemsGame';
import { parseGameMode } from  './stragem/helpers';

import './App.css';

function App() {
  const [currentGame, setCurrentGame] = useState('selected');

  const selectGame = () => {
    currentGame == 'random' ? setCurrentGame('selected') : setCurrentGame('random');
  };

  return (
    <div>
      <header>
        Helldiver Training Manual
      </header>
      <button className='selectGameMode' onClick={selectGame}>
        {parseGameMode(currentGame)}
      </button>

      <StratagemsGame mode={currentGame}/>
    </div>
  );
}

export default App;
