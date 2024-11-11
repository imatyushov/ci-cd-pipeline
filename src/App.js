import './App.css';
import {useEffect, useState} from "react";

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let intervalId = undefined;
    if (isStarted) {
      intervalId = window.setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1_000);
    }

    return () => {
      clearInterval(intervalId);
    }
  }, [isStarted]);

  return (
      <>
          <div style={style}>
              <h1>{seconds}</h1>
              <div>
                  <button style={{color: 'red'}} onClick={() => setIsStarted(() => !isStarted)}>Start</button>
                  <button style={{color: 'green'}} onClick={() => setIsStarted(() => !isStarted)}>Stop</button>
              </div>
          </div>
      </>
  )
}

export default App;
