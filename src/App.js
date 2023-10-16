import Stoper from './components/Stoper/Stoper'
import Button from './components/Button/Button'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.module.scss'

const App = () => {

  const [timer, setTimer] = useState(null);
  const [time, setTime] =useState(0);

  const start = () => {
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1))
    };

    const stop = () => {
      if(timer) clearInterval(timer);
    }

    const reset = () => {
      setTime(0);
    }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div >  
      <Stoper time={time} />
      <div className = {styles.buttons}>
        <Button onClick = {start}>Start</Button>
        <Button onClick = {stop}>Stop</Button>
        <Button onClick = {reset}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
