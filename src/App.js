import './App.css';

const Person = () => {
  return (
    <>
    <h1>Name : Yongs </h1>
    <h2>Occupation : SWE </h2>
    <h2>Age : 23</h2>
    </>
  );
}

const App = () => {
  return (
      <div className="App">
        <Person />
      </div>
  );
}

export default App;