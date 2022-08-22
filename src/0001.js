import './0001.css';
import backarrow from './image source/backarrow.png';
import leftarrow from './image source/left-arrow(9).png';
import rightarrow from './image source/right-arrow(9).png';


function App() {
  return (
    <div className="App">
      <div className="background09">
        <div className="login01">
            <span className='canMake01'>롤링페이퍼를 만들 수 있어요!</span>
            <span className='loginSpan01'>로그인하고 <br></br> 시작하기</span>
        </div>
        <div className="start01">
            <span className='canWrite01'>계정이 없어도 편지를 쓸 수 있어요!</span>
            <span className='startSpan01'>바로 <br></br> 시작하기</span>
        </div>
      </div>
    </div>
  );
}

export default App;
