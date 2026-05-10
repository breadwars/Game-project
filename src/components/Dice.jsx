function getFaceValues(value, sides, count) {
  return Array.from({ length: count }, (_, index) => {
    return ((value - 1 + index) % sides) + 1;
  });
}

function FaceValue({ children }) {
  return <span className="face-value">{children}</span>;
}

function D6({ value, rolling }) {
  const faceValues = getFaceValues(value, 6, 6);

  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="die-model cube">
        <div className="cube-face front">
          <FaceValue>{faceValues[0]}</FaceValue>
        </div>
        <div className="cube-face back">
          <FaceValue>{faceValues[1]}</FaceValue>
        </div>
        <div className="cube-face right">
          <FaceValue>{faceValues[2]}</FaceValue>
        </div>
        <div className="cube-face left">
          <FaceValue>{faceValues[3]}</FaceValue>
        </div>
        <div className="cube-face top">
          <FaceValue>{faceValues[4]}</FaceValue>
        </div>
        <div className="cube-face bottom">
          <FaceValue>{faceValues[5]}</FaceValue>
        </div>
      </div>
    </div>
  );
}

function D8({ value, rolling }) {
  const faceValues = getFaceValues(value, 8, 8);

  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="die-model d8-solid">
        <div className="d8-face d8-front-top"><FaceValue>{faceValues[0]}</FaceValue></div>
        <div className="d8-face d8-right-top"><FaceValue>{faceValues[1]}</FaceValue></div>
        <div className="d8-face d8-back-top"><FaceValue>{faceValues[2]}</FaceValue></div>
        <div className="d8-face d8-left-top"><FaceValue>{faceValues[3]}</FaceValue></div>
        <div className="d8-face d8-front-bottom"><FaceValue>{faceValues[4]}</FaceValue></div>
        <div className="d8-face d8-right-bottom"><FaceValue>{faceValues[5]}</FaceValue></div>
        <div className="d8-face d8-back-bottom"><FaceValue>{faceValues[6]}</FaceValue></div>
        <div className="d8-face d8-left-bottom"><FaceValue>{faceValues[7]}</FaceValue></div>
      </div>
    </div>
  );
}

function D10({ value, rolling }) {
  const faceValues = getFaceValues(value, 10, 10);

  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="die-model d10-solid">
        <div className="d10-face d10-top-cap"><FaceValue>{faceValues[0]}</FaceValue></div>
        <div className="d10-face d10-upper-left"><FaceValue>{faceValues[1]}</FaceValue></div>
        <div className="d10-face d10-upper-front-left"><FaceValue>{faceValues[2]}</FaceValue></div>
        <div className="d10-face d10-upper-front-right"><FaceValue>{faceValues[3]}</FaceValue></div>
        <div className="d10-face d10-upper-right"><FaceValue>{faceValues[4]}</FaceValue></div>
        <div className="d10-face d10-lower-right"><FaceValue>{faceValues[5]}</FaceValue></div>
        <div className="d10-face d10-lower-front-right"><FaceValue>{faceValues[6]}</FaceValue></div>
        <div className="d10-face d10-lower-front-left"><FaceValue>{faceValues[7]}</FaceValue></div>
        <div className="d10-face d10-lower-left"><FaceValue>{faceValues[8]}</FaceValue></div>
        <div className="d10-face d10-bottom-cap"><FaceValue>{faceValues[9]}</FaceValue></div>
      </div>
    </div>
  );
}

function D12({ value, rolling }) {
  const faceValues = getFaceValues(value, 12, 12);

  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="die-model d12-solid">
        <div className="d12-face d12-top"><FaceValue>{faceValues[0]}</FaceValue></div>
        <div className="d12-face d12-upper-left"><FaceValue>{faceValues[1]}</FaceValue></div>
        <div className="d12-face d12-upper-front-left"><FaceValue>{faceValues[2]}</FaceValue></div>
        <div className="d12-face d12-front"><FaceValue>{faceValues[3]}</FaceValue></div>
        <div className="d12-face d12-upper-front-right"><FaceValue>{faceValues[4]}</FaceValue></div>
        <div className="d12-face d12-upper-right"><FaceValue>{faceValues[5]}</FaceValue></div>
        <div className="d12-face d12-lower-right"><FaceValue>{faceValues[6]}</FaceValue></div>
        <div className="d12-face d12-lower-front-right"><FaceValue>{faceValues[7]}</FaceValue></div>
        <div className="d12-face d12-bottom"><FaceValue>{faceValues[8]}</FaceValue></div>
        <div className="d12-face d12-lower-front-left"><FaceValue>{faceValues[9]}</FaceValue></div>
        <div className="d12-face d12-lower-left"><FaceValue>{faceValues[10]}</FaceValue></div>
        <div className="d12-face d12-back"><FaceValue>{faceValues[11]}</FaceValue></div>
      </div>
    </div>
  );
}

function D20({ value, rolling }) {
  const faceValues = getFaceValues(value, 20, 20);

  return (
    <div className={`die-scene ${rolling ? "rolling" : ""}`}>
      <div className="die-model d20-solid">
        <div className="d20-face d20-north"><FaceValue>{faceValues[0]}</FaceValue></div>
        <div className="d20-face d20-north-west"><FaceValue>{faceValues[1]}</FaceValue></div>
        <div className="d20-face d20-west"><FaceValue>{faceValues[2]}</FaceValue></div>
        <div className="d20-face d20-south-west"><FaceValue>{faceValues[3]}</FaceValue></div>
        <div className="d20-face d20-south"><FaceValue>{faceValues[4]}</FaceValue></div>
        <div className="d20-face d20-south-east"><FaceValue>{faceValues[5]}</FaceValue></div>
        <div className="d20-face d20-east"><FaceValue>{faceValues[6]}</FaceValue></div>
        <div className="d20-face d20-north-east"><FaceValue>{faceValues[7]}</FaceValue></div>
        <div className="d20-face d20-upper-front"><FaceValue>{faceValues[8]}</FaceValue></div>
        <div className="d20-face d20-upper-left"><FaceValue>{faceValues[9]}</FaceValue></div>
        <div className="d20-face d20-upper-back-left"><FaceValue>{faceValues[10]}</FaceValue></div>
        <div className="d20-face d20-upper-back"><FaceValue>{faceValues[11]}</FaceValue></div>
        <div className="d20-face d20-upper-back-right"><FaceValue>{faceValues[12]}</FaceValue></div>
        <div className="d20-face d20-upper-right"><FaceValue>{faceValues[13]}</FaceValue></div>
        <div className="d20-face d20-lower-right"><FaceValue>{faceValues[14]}</FaceValue></div>
        <div className="d20-face d20-lower-back-right"><FaceValue>{faceValues[15]}</FaceValue></div>
        <div className="d20-face d20-lower-back"><FaceValue>{faceValues[16]}</FaceValue></div>
        <div className="d20-face d20-lower-back-left"><FaceValue>{faceValues[17]}</FaceValue></div>
        <div className="d20-face d20-lower-left"><FaceValue>{faceValues[18]}</FaceValue></div>
        <div className="d20-face d20-lower-front"><FaceValue>{faceValues[19]}</FaceValue></div>
      </div>
    </div>
  );
}

export default function Dice({ die }) {
  if (die.sides === 6) {
    return <D6 value={die.value} rolling={die.rolling} />;
  }

  if (die.sides === 8) {
    return <D8 value={die.value} rolling={die.rolling} />;
  }

  if (die.sides === 10) {
    return <D10 value={die.value} rolling={die.rolling} />;
  }

  if (die.sides === 12) {
    return <D12 value={die.value} rolling={die.rolling} />;
  }

  if (die.sides === 20) {
    return <D20 value={die.value} rolling={die.rolling} />;
  }

  return (
    <div className="die-scene">
      <div className="die-number">{die.value}</div>
    </div>
  );
}
