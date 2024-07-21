import { useState, useEffect } from 'react';
import './Intro.css';

function Intro (props) {
  const [currentTime, setCurrentTime] = useState('');

  const getDate = () => {
    const today = new Date();
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getDate());
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(intervalId);
  }, []);
  
  

  return (
    <>
      {props.isLoginPageVisible && (
        <div className="loginpage">
          <div className="main_content">
            <p className="time"> {currentTime} </p>
            <img className="status" src="src/assets/statusbar.png"/>
            <h1 className="ctext">Hi! I'm Evelyn, a web developer from Texas.</h1>
            <button className="getstarted" onClick={() => props.handleGetStartedClick()}>Click to get started</button>
          </div>
          <div className="justbox"></div>
        </div>
      )}
    </>
  )
}

export default Intro;