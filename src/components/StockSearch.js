import React, { useState } from 'react';

function StockSearch() {
  const [symbol, setSymbol] = useState("");
  const [prediction, setPrediction] = useState(null);

  const fetchPrediction = async () => {
    const response = await fetch(`http://localhost:5000/api/predict?symbol=${symbol}`);
    const data = await response.json();
    setPrediction(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={fetchPrediction}>Get Prediction</button>

      {prediction && (
        <div>
          <h3>Prediction for {symbol}:</h3>
          <p>{prediction.buy ? "Buy" : "Sell"} at ${prediction.price}</p>
        </div>
      )}
    </div>
  );
}

export default StockSearch;
