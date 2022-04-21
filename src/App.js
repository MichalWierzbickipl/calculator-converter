import React, { useState } from "react";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  const [calcHistory, setCalcHistory] = useState([]);

  const convert = (e) => {
    e.preventDefault();
    const formValid = !isNaN(+celsius);
    if (!formValid) {
      return;
    }
    setFahrenheit(+celsius * (9 / 5) + 32);
    setKelvin(+celsius + 273);
    setCalcHistory([
      ...calcHistory,
      {
        celsius,
        fahrenheit: +celsius * (9 / 5) + 32,
        kelvin: +celsius + 273,
      },
    ]);
  };

  return (
    <div className="App">
      <form onSubmit={convert}>
        <div>
          <label>temperature in celsius</label>
          <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        </div>
        <button type="submit">convert</button>
      </form>
      <div>
        is {fahrenheit.toFixed()} fahrenheit<div>is {kelvin} kelvin</div>
        <br></br>
      </div>
      {calcHistory.map((c) => (
        <ul>
          <li>celcius: {c.celsius}</li>
          <li>fahrenheit: {c.fahrenheit.toFixed()}</li>
          <li>kelvin: {c.kelvin}</li>
          <br></br>
        </ul>
      ))}
    </div>
  );
}
