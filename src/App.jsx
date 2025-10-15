import { useState } from 'react';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import Log from './Components/Log.jsx';

function derivweActivePlayer(gameTurns) {
  let currentPlayer = 'X';

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      return currentPlayer; 
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = derivweActivePlayer(gameTurns);
   
  function handleSelectedSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevturns => {
     
      const currentPlayer = derivweActivePlayer(prevturns);

      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevturns];

      return updateTurns;
    });
  }

  return <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player
         Initialname="Player 1" 
         symbol="X" 
         isActive={ activePlayer === 'X' } />

        <Player 
        Initialname="Player 2" 
        symbol="O" 
        isActive={ activePlayer === 'O' } />

      </ol>

      <GameBoard onSelectSquare={handleSelectedSquare}
       turns={ gameTurns }/>
    </div>

    <Log turns={ gameTurns }/>
  </main>;
}

export default App
