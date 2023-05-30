import './App.css';

function App() {

  const name = null;
  const myname = 'Yongs';
  
  return (
      <div className="App">
        <h1>Hello, {myname}</h1>
        {name ? (
          <>
            <h1>{myname}</h1>
            <h2>ON true</h2>
          </>
        ) : (
          <>
            <h1> Yongs Showing on null </h1>
            <h2> OR on false</h2>
          </>
        )}
      </div>
  );
}

export default App;