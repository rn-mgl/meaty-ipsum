import React from "react";
import bacons from "./COMPONENTS/data";
import { nanoid } from "nanoid";

function App() {
  const [weight, setWeight] = React.useState(0);
  const [meat, setMeat] = React.useState([]);

  function getValue(event) {
    const kilos = event.target.value >= 0 ? event.target.value : 0;
    setWeight(kilos);
  }

  function generate() {
    setMeat(() => {
      const newSet = [];
      for (let i = 0; i < weight; i++) {
        newSet.push(bacons[i]);
      }
      return newSet;
    });
  }

  const generatedMeat = meat.map((data) => (
    <div key={nanoid()} className="paragraph-container">
      {data}
    </div>
  ));

  return (
    <div className="body">
      <div className="title">
        <span className="title-meaty">MEATY </span>
        <span className="title-ipsum"> Ipsum</span>
      </div>

      <div className="paragraph-generator-container">
        <span className="paragraph-generator-text">Paragraphs:</span>

        <input
          onChange={getValue}
          value={weight}
          className="amount-input"
          type="number"
          name="paragraphs"
          id="paragraphs"
        />

        <button onClick={generate} className="generate-button">
          GENERATE
        </button>
      </div>

      {weight <= 100 ? (
        generatedMeat
      ) : (
        <div className="err-handle">Weight limit is 100</div>
      )}
    </div>
  );
}

export default App;
