import { useState } from "react";
import DiceArea from "./components/DiceArea";
import Shop from "./Shop";
import "./App.css";

const SIDE_UPGRADES = [6, 8, 10, 12, 20];

const createDie = (id, sides = 6) => ({
  id,
  sides,
  value: 1,
  rolling: false,
});

export default function Dice(type) {
  const [total, setTotal] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);
  const [dice, setDice] = useState([createDie(1)]);
  console.log(type);

  function getRandomRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  function addDie() {
    setDice((prev) => [...prev, createDie(prev.length + 1)]);
  }

  function addSide() {
    setDice((prev) => {
      const dieIndex = prev.findIndex((die) => {
        const currentStep = SIDE_UPGRADES.indexOf(die.sides);
        return currentStep !== -1 && currentStep < SIDE_UPGRADES.length - 1;
      });

      if (dieIndex === -1) {
        return prev;
      }

      return prev.map((die, index) => {
        if (index !== dieIndex) {
          return die;
        }

        const nextSides =
          SIDE_UPGRADES[SIDE_UPGRADES.indexOf(die.sides) + 1] ?? die.sides;

        return {
          ...die,
          sides: nextSides,
          value: Math.min(die.value, nextSides),
        };
      });
    });
  }

  function rollDice() {
    setDice((prev) => prev.map((die) => ({ ...die, rolling: true })));

    setTimeout(() => {
      setDice((prev) => {
        const rolled = prev.map((die) => ({
          ...die,
          value: getRandomRoll(die.sides),
          rolling: false,
        }));

        const sum = rolled.reduce((acc, die) => acc + die.value, 0);
        setTotal((prevTotal) => prevTotal + sum);

        return rolled;
      });
    }, 1000);
  }

  return (
    <div className="container">
      <div className="dice-box">
        <h1 className="title">3D Dice Roller</h1>
        <DiceArea dice={dice} total={total} />

        <div className="total">Total: {total}</div>

        <div className="main-buttons">
          <button className="btn" onClick={rollDice}>
            Roll Dice
          </button>
        </div>
        <Shop
          shopOpen={shopOpen}
          setShopOpen={setShopOpen}
          addDie={addDie}
          addSide={addSide}
        />
      </div>
    </div>
  );
}
