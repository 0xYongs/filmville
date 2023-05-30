import './App.css';

const Person = (props) => {
  return (
    <>
     <h1>Name : {props.name} </h1>
     <h2>Occupation : {props.occupation} </h2>
     <h2>Age : {props.age}</h2>
    </>
  );
}

const App = () => {
  return (
      <div className="App">
        <Person name = {'Yongz'} occupation = {'SDE'} age = {'20'}/>

        <Person 
          name = {'Yongs'}
          occupation = {'Full Stack Engineer'}
          age = {'23'}/>
      </div>
  );
}

export default App;