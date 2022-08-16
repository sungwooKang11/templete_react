import './0000.css';
import bigLogo from './image source/bigLogo.png';

function App() {
  return (
    <div className="App">
      <div className="background00">
        <div className="imgBox00">
          <img src={bigLogo}></img>
        </div>
        <button className="startBtn00">
          <span className="startSpan00">시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default App;
