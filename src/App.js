import React, { useState, useMemo } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [filterThreshold, setFilterThreshold] = useState(50);
  const [newNumber, setNewNumber] = useState("");

  const addNumber = () => {
    if (newNumber === "") {
      return alert("input number");
    } else {
      const updatedNumbers = numbers.concat(parseInt(newNumber));
      setNumbers(updatedNumbers);
      setNewNumber("");
    }
  };

  const numFilter = (numbers) => {};

  const filterNumbers = useMemo(() => {
    // let filtered = [];

    // filtered = numbers.filter();

    // for (let i = 0; i < numbers.length; i++) {
    //   if (numbers[i] >= filterThreshold) {
    //     filtered.push(numbers[i]);
    //   }
    // }
    // return filtered;
    return numbers.filter((num) => num >= filterThreshold);
  }, [numbers, filterThreshold]);

  const calculateAverage = () => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    numbers.forEach((num) => {
      sum += num;
    });
    return sum / numbers.length;
  };

  const averaged = useMemo(() => calculateAverage(numbers), [numbers]);

  return (
    <div className="container">
      <h1>Number List</h1>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="New Number"
      />
      <button onClick={() => addNumber()}>Add Number</button>
      <h2>Filtered Numbers (≥ {filterThreshold}):</h2>
      <ul>
        {filterNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Average of Numbers: {averaged}</h2>
    </div>
  );
};

export default App;
