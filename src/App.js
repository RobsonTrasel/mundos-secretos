
import './styles/App.css';
import { Game, GameOver, InitialScreen} from './components/index'
import { useCallback, useEffect, useState } from 'react';
import { Wordlist } from './data/Words';

const stages = [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
]




const App = () => {
    const [gameStage, setGameStage] = useState(stages[0].name)
    const [words] = useState(Wordlist)
    console.log(words)

    return (
      <div className="App">
        {gameStage === 'start' && <InitialScreen/>}
        {gameStage === 'game' && <Game/>}
        {gameStage === 'end' && <GameOver/>}
      </div>
    );
}

export default App;
