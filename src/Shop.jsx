export default function Shop({ shopOpen, setShopOpen, addDie, addSide }) {
  return (
    <>
      <button
        className="btn shop-toggle"
        onClick={() => setShopOpen(!shopOpen)}
      >
        {shopOpen ? "Close Shop" : "Shop"}
      </button>

      {shopOpen && (
        <div className="shop-menu">
          <h2>Shop</h2>

          <div className="shop-section">
            <h3>Add another die</h3>
            <button className="btn extra-btn" onClick={addDie}>
              Add Dice
            </button>
          </div>

          <div className="shop-section">
            <h3>Upgrade a die</h3>
            <button className="btn extra-btn" onClick={addSide}>
              Add Side
            </button>
          </div>
        </div>
      )}
    </>
  );
}
