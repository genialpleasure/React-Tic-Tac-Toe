import { useState } from 'react';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import Log from './Components/Log.jsx';
import GameOver from './Components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './Components/winning-combination.jsx';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialGameBoard;

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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
          isActive={activePlayer === 'X'} />

        <Player
          Initialname="Player 2"
          symbol="O"
          isActive={activePlayer === 'O'} />

      </ol>
      {(winner || hasDraw) && <GameOver winner = {winner} />}
      <GameBoard onSelectSquare={handleSelectedSquare}
        board={gameBoard} />
    </div>
    <Log turns={gameTurns} />
  </main>;
}

export default App
