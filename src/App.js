import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
      alert('Counter has been changed to ' + counter);
  }, [counter]);
  
  return (
      <div className="App">
        <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
      </div>
  );
}

export default App;