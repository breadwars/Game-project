function pipLayout(value) {
  const layouts = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: ["top-left","top-right","middle-left","middle-right","bottom-left","bottom-right",],
  };

  return layouts[value] || [];
}

function D6({ value, rolling }) {
  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="cube">
        <div className="cube-face front">
          <div className="pip-face">
            {pipLayout(value).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>

        <div className="cube-face back">
          <div className="pip-face">
            {pipLayout(6).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>

        <div className="cube-face right">
          <div className="pip-face">
            {pipLayout(3).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>

        <div className="cube-face left">
          <div className="pip-face">
            {pipLayout(4).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>

        <div className="cube-face top">
          <div className="pip-face">
            {pipLayout(2).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>

        <div className="cube-face bottom">
          <div className="pip-face">
            {pipLayout(5).map((pos, index) => (
              <span key={index} className={`pip ${pos}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dice({ die }) {
  if (die.sides === 6) {
    return <D6 value={die.value} rolling={die.rolling} />;
  }

  return (
    <div className="die-scene">
      <div className="die-number">{die.value}</div>
    </div>
  );
}
