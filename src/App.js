import "./styles/App.css";
import { Game, GameOver, InitialScreen } from "./components/index";
import { useCallback, useEffect, useState } from "react";
import { Wordlist } from "./data/Words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(Wordlist);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWord = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random * Object.keys(words).length)];
    console.log(category);
  };

  const startGame = () => {
    pickWord();
    setGameStage(stages[1].name);
  };
  const verifyWord = () => setGameStage(stages[2].name);
  const retry = () => setGameStage(stages[0].name);

  return (
    <div className="App">
      {gameStage === "start" && <InitialScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyWord={verifyWord} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
};

export default App;
