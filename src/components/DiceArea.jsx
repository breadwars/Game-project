import Dice from "./Dice";

export default function DiceArea({ dice, total }) {
  return (
    <>
      <div className="dice-row">
        {dice.map((die, index) => (
          <div key={die.id} className="die-wrapper">
            <Dice die={die} />
            <div className="die-info">
              Die {index + 1} - d{die.sides} - rolled {die.value} - score {total}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
