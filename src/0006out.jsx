import React, { useState } from 'react';

import './0006out.css';



function App() {

  return (
    <div className="App">
      <div className="background09">
        {/* <span className='span06out'>opacity 확인용 지워도 됨</span> */}
        <div className="logOutModal06">
            <span className="logoutQ06">로그아웃 하시겠어요?</span>
            <div className="buttonCon06">
                <button className="O06">
                    <div className="circle06"></div>
                </button>
                <button className="X06"></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
