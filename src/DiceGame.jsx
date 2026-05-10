import { useState } from "react";
import DiceArea from "./components/DiceArea";
import Shop from "./Shop";
import "./App.css";

const SIDE_UPGRADES = [6, 8, 10, 12, 20];
const STARTING_GOAL = 10;
const ROLLS_PER_ROUND = 4;
const ADD_DIE_BASE_COST = 10;
const ADD_SIDE_BASE_COST = 7;

const createDie = (id, sides = 6) => ({
  id,
  sides,
  value: 1,
  rolling: false,
});

export default function Dice({ type, onGameOver }) {
  const [score, setScore] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);
  const [dice, setDice] = useState([createDie(1)]);
  const [round, setRound] = useState(1);
  const [goal, setGoal] = useState(STARTING_GOAL);
  const [rollsLeft, setRollsLeft] = useState(ROLLS_PER_ROUND);
  const [gold, setGold] = useState(0);
  const [addDieCost, setAddDieCost] = useState(ADD_DIE_BASE_COST);
  const [addSideCost, setAddSideCost] = useState(ADD_SIDE_BASE_COST);
  console.log(type);

  function getRandomRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  function advanceRound(roundScore) {
    setGold((prev) => prev + roundScore);
    setRound((prev) => prev + 1);
    setGoal((prev) => Math.ceil(prev * 1.3));
    setRollsLeft(ROLLS_PER_ROUND);
    setScore(0);
    setShopOpen(false);
  }

  function endGame() {
    setShopOpen(false);
    onGameOver();
  }

  function addDie() {
    if (gold < addDieCost) {
      return;
    }

    setDice((prev) => [...prev, createDie(prev.length + 1)]);
    setGold((prev) => prev - addDieCost);
    setAddDieCost((prev) => Math.ceil(prev * 1.2));
  }

  function addSide() {
    if (gold < addSideCost) {
      return;
    }

    let upgraded = false;

    setDice((prev) => {
      const dieIndex = prev.findIndex((die) => {
        const currentStep = SIDE_UPGRADES.indexOf(die.sides);
        return currentStep !== -1 && currentStep < SIDE_UPGRADES.length - 1;
      });

      if (dieIndex === -1) {
        return prev;
      }

      upgraded = true;

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

    if (!upgraded) {
      return;
    }

    setGold((prev) => prev - addSideCost);
    setAddSideCost((prev) => Math.ceil(prev * 1.2));
  }

  function rollDice() {
    if (rollsLeft <= 0) {
      return;
    }

    setDice((prev) => prev.map((die) => ({ ...die, rolling: true })));
    

    setTimeout(() => {
      let rolled;

      
      setDice((prev) => {   
        rolled = prev.map((die) => ({
          ...die,
          value: getRandomRoll(die.sides),
          rolling: false,
        }));
        console.log(rolled)
        return rolled;
      });

      const sum = rolled.reduce((acc, die) => acc + die.value, 0);
      const nextScore = score + sum;
      setScore(nextScore)

      setRollsLeft((prevRollsLeft) => {
            const nextRollsLeft = prevRollsLeft - 1;
           

            if (nextRollsLeft === 0) {
              if (nextScore >= goal) {
                advanceRound(nextScore);
              } else {
                endGame();
              }
            }

            return nextRollsLeft;
          });
    }, 1000);
    
  }

  return (
    <div className="container">
      <div className="dice-box">
        <h1 className="title">3D Dice Roller</h1>
        <div className="game-stats">
          <div className="game-stat">Round: {round}</div>
          <div className="game-stat">Goal: {goal}</div>
          <div className="game-stat">Score: {score}</div>
          <div className="game-stat">Rolls Left: {rollsLeft}</div>
          <div className="game-stat">Gold: {gold}</div>
        </div>

        <DiceArea dice={dice} total={score} />

        <div className="total">Round Score: {score}</div>

        <div className="main-buttons">
          <button className="btn" onClick={rollDice} disabled={rollsLeft <= 0}>
            Roll Dice
          </button>
        </div>
        <Shop
          shopOpen={shopOpen}
          setShopOpen={setShopOpen}
          addDie={addDie}
          addSide={addSide}
          addDieCost={addDieCost}
          addSideCost={addSideCost}
          gold={gold}
        />
      </div>
    </div>
  );
}
