import { useState } from "react";
import "./App.css";

<<<<<<< HEAD
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <p>Hello world</p>
    </>
  )
=======
function getRandomRoll(sides) {
  return Math.floor(Math.random() * sides) + 1;
>>>>>>> 6ea9766 (new add dice feature)
}

function pipLayout(value) {
  const layouts = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: [
      "top-left",
      "top-right",
      "middle-left",
      "middle-right",
      "bottom-left",
      "bottom-right",
    ],
  };
  return layouts[value] || [];
}

function D6({ value, rolling }) {
  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="cube">
        <div className="cube-face front">
          <div className="pip-face">
            {pipLayout(value).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
        <div className="cube-face back">
          <div className="pip-face">
            {pipLayout(6).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
        <div className="cube-face right">
          <div className="pip-face">
            {pipLayout(3).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
        <div className="cube-face left">
          <div className="pip-face">
            {pipLayout(4).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
        <div className="cube-face top">
          <div className="pip-face">
            {pipLayout(2).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
        <div className="cube-face bottom">
          <div className="pip-face">
            {pipLayout(5).map((pos, i) => (
              <span key={i} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DieVisual({ die }) {
  return <D6 value={die.value} rolling={die.rolling} />;
}

export default function App() {
  const [dice, setDice] = useState([{ value: 1, sides: 6, rolling: false }]);
  const [total, setTotal] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);

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

  function addDie() {
    setDice((prev) => [...prev, { value: 1, sides: 6, rolling: false }]);
  }

  return (
    <div className="container">
      <div className="dice-box">
        <h1 className="title">3D Dice Roller</h1>

        <div className="dice-row">
          {dice.map((die, index) => (
            <div key={index} className="die-wrapper">
              <DieVisual die={die} />
              <div className="die-info">
                Die {index + 1} · rolled {die.value}
              </div>
            </div>
          ))}
        </div>

        <div className="total">Total: {total}</div>

        <div className="main-buttons">
          <button className="btn" onClick={rollDice}>
            Roll Dice
          </button>
          <button className="btn shop-toggle" onClick={() => setShopOpen(!shopOpen)}>
            {shopOpen ? "Close Shop" : "Shop"}
          </button>
        </div>

        {shopOpen && (
          <div className="shop-menu">
            <h2>Shop</h2>

            <div className="shop-section">
              <h3>Add another die</h3>
              <button className="btn extra-btn" onClick={addDie}>
                Add Dice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}