export default function TitleScreen({ onStart }) {
  return (
    <div className="container">
      <div className="title-screen">
        <h1 className="title-screen-heading">Dice Game</h1>
        <button className="btn title-screen-btn" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
}
