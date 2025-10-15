import React, { useState } from 'react';

function QuoteCounter({ initialValue = 0, incrementBy = 1 }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    var curr_machines = count / incrementBy;
    if (curr_machines % 3){ // maybe then increase for additional onsite labor...

    }
    setCount(count + incrementBy);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - incrementBy);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Initial 1 Machine Estimated Price: ${initialValue}</h2>
      <h2>Additional Cost: ${count} --- Total Machines: {count/incrementBy + 1}</h2>
      <h2>Total Cost: ${count+initialValue}</h2>
      <button onClick={handleIncrement}>Increase +1 Machine, ~${incrementBy} per machine</button>
      <button onClick={handleDecrement}>Decrease -1 Machine</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}


export default QuoteCounter;