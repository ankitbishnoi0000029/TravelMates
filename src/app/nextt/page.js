import React, { useState } from 'react';

const RandomButtonGame = ({ data }) => {
  // 1. State variables to store selected buttons and correct answers
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  // 2. Generate random order of buttons
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const buttons = [...countries, ...capitals];
  buttons.sort(() => Math.random() - 0.5);

  // 3. Handle button click
  const handleButtonClick = (button) => {
    if (selected.length < 2) {
      setSelected((prev) => [...prev, button]);
    } else {
      setSelected([button]);
    }
  };

  // 4. Check if the selection is correct
  const checkMatch = () => {
    if (selected.length === 2) {
      const [first, second] = selected;
      const firstIsCountry = countries.includes(first);
      const secondIsCountry = countries.includes(second);
      const firstCapital = data[first];
      const secondCapital = data[second];
      if (
        (firstIsCountry && second === firstCapital) ||
        (secondIsCountry && first === secondCapital)
      ) {
        setMatched((prev) => [...prev, ...selected]);
        setShowMessage(matched.length + 2 === countries.length); // Show message if all matched
      }
    }
    setSelected([]);
  };

  // 5. Style for the buttons
  const getButtonStyle = (button) => {
    if (matched.includes(button)) {
      return { backgroundColor: 'green' };
    }
    if (selected.includes(button)) {
      return { backgroundColor: 'blue' };
    }
    return {};
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              handleButtonClick(button);
              if (selected.length === 2) checkMatch();
            }}
            style={{ ...getButtonStyle(button), margin: '10px', padding: '10px' }}
          >
            {button}
          </button>
        ))}
      </div>
      {showMessage && <h2>Congratulations! You matched all the countries and capitals!</h2>}
    </div>
  );
};

// Example usage of the component:
const data = {
  Germany: "Berlin",
  India: "Delhi",
};

const App = () => {
  return (
    <div>
      <RandomButtonGame data={data} />
    </div>
  );
};

export default App;
