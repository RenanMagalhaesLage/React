//CSS
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //Escolhendo uma categoria aleatoriamente
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Escolhendo uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }, [words]);

  //Função que dá início ao jogo
  const startGame = useCallback(() => {
    //Limpando as letras
    clearLetterStates();

    //Escolhendo aleatoriamente uma categoria e uma palavra
    const { word, category } = pickWordAndCategory();

    //Criando um array com as letras da palavra
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //Função para averiguar a letra digitada
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    //verificando se a letra já foi usada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //Adicionando as letras adivinhadas ou removendo as chances
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]); //adicionando a letra no vetor de letras adivinhadas
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //Verificando vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]; //set deixa o array com itens UNICOS
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      //Reiniciando o jogo com uma nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //Verificando se as tentativas acabaram
  useEffect(() => {
    if (guesses <= 0) {
      //Resetandos os estados
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //Função para recomeçar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
