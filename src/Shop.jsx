export default function Shop({
  shopOpen,
  setShopOpen,
  addDie,
  addSide,
  addDieCost,
  addSideCost,
  gold,
}) {
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
          <div className="shop-gold">Gold: {gold}</div>

          <div className="shop-section">
            <h3>Add another die ({addDieCost} gold)</h3>
            <button
              className="btn extra-btn"
              onClick={addDie}
              disabled={gold < addDieCost}
            >
              Add Dice
            </button>
          </div>

          <div className="shop-section">
            <h3>Upgrade a die ({addSideCost} gold)</h3>
            <button
              className="btn extra-btn"
              onClick={addSide}
              disabled={gold < addSideCost}
            >
              Add Side
            </button>
          </div>
        </div>
      )}
    </>
  );
}
