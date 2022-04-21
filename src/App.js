import React, { useState } from "react";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  const [calcHistory, setCalcHistory] = useState([]);

  const calculatedFahrenheit = (+celsius * (9 / 5) + 32).toFixed(2);
  const calculatedKelvin = (+celsius + 273).toFixed(2);

  const convert = (e) => {
    e.preventDefault();
    const formValid = !isNaN(+celsius);
    if (!formValid) {
      return;
    }
    setFahrenheit(calculatedFahrenheit);
    setKelvin(calculatedKelvin);
    setCalcHistory([
      ...calcHistory,
      {
        celsius,
        fahrenheit: calculatedFahrenheit,
        kelvin: calculatedKelvin,
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
        is {fahrenheit} fahrenheit<div>is {kelvin} kelvin</div>
      </div>
      {calcHistory.map((c) => (
        <ul>
          <li>celcius: {c.celsius}</li>
          <li>fahrenheit: {c.fahrenheit}</li>
          <li>kelvin: {c.kelvin}</li>
        </ul>
      ))}
    </div>
  );
}
