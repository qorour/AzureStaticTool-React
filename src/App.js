import React from 'react';
import ren_logo from './new_logo.gif';

function App() {
  const value = 'Quinn';
  return (
    <div className="Homepage">
      <div>Hello there, {value}!</div>
      <img src={ren_logo} alt="Renishaw image" height={200} width={200} />
    </div>
  );
}

export default App;

