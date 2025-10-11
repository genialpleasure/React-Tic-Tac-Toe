import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';

function App() {
  return <main>
    <div id='game-container'>
      <ol id='players'>
        <Player Initialname="Player 1" symbol="X"/>
         <Player Initialname="Player 2" symbol="O"/>
    
      </ol>

      <GameBoard />
    </div>

    LOG
  </main>;
}

export default App
