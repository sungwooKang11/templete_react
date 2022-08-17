import './0003edit.css';

function App() {
  return (
    <div className="App">
      <div className="background03e">
        <div className="modal03e">
          <div className="namePart03e">
            <span className="name03e">이름</span>
            <input className="nameInput03e" type="text"></input>
          </div>
          <div className="dayPart03e">
            <span className="birthchk03e">OO님의 생일은 언제인가요?</span>
            <div className='selectBox03e'>
              <div className='monthSide03e'>
                <select className='month03e' name='month'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                <span className='월'>월</span>
              </div>
              <div className='daySide03e'>
                <input type='number' className='day03e' min='1' max='31'></input>
                <span className='일'>일</span>
              </div>
              
            </div>
          </div>
          <button className='saveBtn03e'>저장</button>
        </div>
      </div>
    </div>
  );
}

export default App;
