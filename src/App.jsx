import { useState } from "react";
import "./App.css";

function App() {
  const [roll1, setRoll1] = useState(1);
  const [roll2, setRoll2] = useState(1);
  const [total, setTotal] = useState(0);

  function rollDice() {
    const randomRoll1 = Math.floor(Math.random() * 6) + 1;
    setRoll1(randomRoll1);
    const randomRoll2 = Math.floor(Math.random() * 6) + 1;
    setRoll2(randomRoll2);
    setTotal((prevTotal) => prevTotal + randomRoll1 + randomRoll2);
  }

  return (
    <div className="container">
      <h1>Dice Roller</h1>
      <div className="dice_container">
        <div className="dice">{roll1}</div>
        <div className="dice">{roll2}</div>
      </div>
      
      <div className="last_roll">
           <p className="text">Last Roll: {roll1}</p>
           <p className="text">Last Roll: {roll2}</p>
      </div>
      <p className="text">Total Score: {total}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;