import './Y41.css';
import './Y42.css';
import './Y43.css';
import './Y44.css';
import { useState } from 'react';


function Y41() {
    const [info, setInfo] = useState({
        owner: "",
        month: '',
        day: '',
        flower: "",
      });
    const getValue = (e) => {
        setInfo({
          ...info,
          [e.target.name]: e.target.value,
        });
    }

    const sendValue = () =>{
        console.log(info)
    }

  
    
    
    return (
        <div className="Y41">
            <div className="background41">
                <div className='modalGroup'>
                    <div className="modal41 modal first">
                        <span className="owner41">편지의 주인공은 누구인가요?</span>
                        <input className="name41" id='owner' name='owner' onChange={getValue} required></input>
                        <div className='btnCon41'>
                            <button className="back41">취소</button>
                            <button className="next41" onClick={sendValue}>다음</button>
                        </div>
                        <div className="dote41">
                            <nav className="dote141"></nav>
                            <nav className="dote241"></nav>
                            <nav className="dote341"></nav>
                        </div>
                    </div>

                    <div className="modal42 modal second">
                        <span className="birth42">요한 님의 생일은 언제인가요?</span>
                        <div className="date42">
                            <select className="month42" type="number" id='month' name='month' onChange={getValue}>
                                <option value={''}></option>
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
                            <span className="monthSpan42">월</span>
                            <select className="day42" type="number" id='day' name='day' onChange={getValue}>
                                <option value={''}></option>
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
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                                <option value={21}>21</option>
                                <option value={22}>22</option>
                                <option value={23}>23</option>
                                <option value={24}>24</option>
                                <option value={25}>25</option>
                                <option value={26}>26</option>
                                <option value={27}>27</option>
                                <option value={28}>28</option>
                                <option value={29}>29</option>
                                <option value={30}>30</option>
                                <option value={31}>31</option>
                            </select>
                            <span className="daySpan42">일</span>
                        </div>
                        <button className="next42" onClick={sendValue}>다음</button>
                        <div className="dote42">
                            <nav className="dote142"></nav>
                            <nav className="dote242"></nav>
                            <nav className="dote342"></nav>
                        </div>
                    </div>

                    <div className="modal43 modal third">
                        <span className="flowerSpan43">요한 님의 탄생화는</span>
                        <div className="flower43">
                            <p className="flowerP43">수선화</p>
                            <p className="flowerP243">에요</p>
                        </div>
                        <span className="ask43">이 꽃으로 편지를 쓸까요?</span>
                        <div className="circle43"></div>
                        <button className="next43">다른 꽃 선택하기</button>
                        <div className="dote43">
                            <nav className="dote142"></nav>
                            <nav className="dote242"></nav>
                            <nav className="dote342"></nav>
                        </div>
                    </div>

                    <div className="modal44 modal forth">
                        <div className="box44">
                            <div className="arrow"></div>
                            <span className="ask44">어떤 꽃으로 편지를 쓸까요?</span>
                        </div>
                        <div className="circle44">
                            <img className='flower' src={`vases/물망초fin.png`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y41;
