import {useState} from 'react';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import Log from './Components/Log.jsx';


function App() {
  const[gameTurns, setGameTurns] = useState([]);
const[activePlayer, setActivePlayer] = useState('X');

function handleSelectedSquare() {
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns();
}

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player Initialname="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
         <Player Initialname="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
    
      </ol>

      <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer}/>
    </div>

    <Log />
  </main>;
}

export default App
