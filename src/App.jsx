import { useState } from "react";
import DiceGame from "./DiceGame";
import TitleScreen from "./TitleScreen";
import "./App.css";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [sessionId, setSessionId] = useState(0);

  if (!gameStarted) {
    return (
      <TitleScreen
        onStart={() => {
          setSessionId((prev) => prev + 1);
          setGameStarted(true);
        }}
      />
    );
  }

  return (
    <DiceGame
      key={sessionId}
      die={"basic"}
      onGameOver={() => setGameStarted(false)}
    />
  );
}
