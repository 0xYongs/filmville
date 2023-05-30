import './App.css';
import { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);
  return (
      <div className="App">
        <button onClick={() => alert('clicked')}>+</button>
        <h1>{counter}</h1>
        <button>-</button>
      </div>
  );
}

export default App;