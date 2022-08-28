import React, { useState } from 'react';

import './0009.css';
import backarrow from './image source/backarrow.png';
import leftarrow from './image source/left-arrow(9).png';
import rightarrow from './image source/right-arrow(9).png';


function App() {

  return (
    <div className="App">
      <div className="background09">
        <div className='backPrat09'>
          <img className='backBtn09' src={backarrow}></img>
        </div>
        <div className="container09">
          <div className="letterCon09">
            <div className='letterBox09'>
              <textarea className='letter09'></textarea>
              <textarea className='letter09'></textarea>
              <textarea className='letter09'></textarea>
            </div>
          </div>
          <div className="counting09">
            <img className="leftBtn09" src={leftarrow}></img>
            <div className="pageNum09">1 / 23</div>
            <img className="rightBtn09" src={rightarrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
