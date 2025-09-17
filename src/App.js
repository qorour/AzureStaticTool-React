import React from 'react';
import './App.css';

import ren_logo from './new_logo.gif';

function App() {
  const value = 'Quinn';
  const boxStyle = {
    height: '100px',
    width: '100px',
    border: '2px solid black',
    margin: '10px', 
  }
  
  return (
      <div className="Homepage">
        <div className="container">
          {/* Left Column */}
          <div className="left-column">
            <img src={ren_logo} alt="Renishaw image" height={100} width={300} />
            <p style={{fontSize: '32px', fontWeight: 'bold', color: 'black'}}>
              Welcome to the MT Software Sales Tool!  
            </p>
            <img src='./softwarepyramid.png' alt="MT Software Structure" height={300} width={400} />
          </div>

          {/* Middle Column */}
          <div className="middle-column">
            <p style={{fontSize: '24px', fontWeight: 'bold', color: 'blue'}}>
              MSP: 
            </p>
            <video width="600" controls>
              <source src="/AutoClock-Technical-Promo-Video.mp4" type="video/mp4" />
              ERROR: Your browser does not support the video tag.
            </video>
            &nbsp;
            <p style={{fontSize: '24px', fontWeight: 'bold', color: 'aqua'}}>
              CappsNC: 
            </p>
            <video width="600" controls>
              <source src="/cappsexample.mp4" type="video/mp4" />
              ERROR: Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <p style={{fontSize: '24px', fontWeight: 'bold', color: 'orange'}}>
              Productivity+: 
            </p>
            <video width="600" controls>
              <source src="/pplus.mp4" type="video/mp4" />
              ERROR: Your browser does not support the video tag.
            </video>
            &nbsp;
            <p style={{fontSize: '24px', fontWeight: 'bold', color: 'grey'}}>
              Set and Inspect: 
            </p>
            <video width="600" controls>
              <source src="/setandinspect.mp4" type="video/mp4" />
              ERROR: Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );

}

export default App;

