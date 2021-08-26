import './App.css';
import {useState} from "react";

function App() {
  const [counter, setcounter] = useState(0);

  function plus(){
    setcounter(counter+1);
    console.log(counter)
  }  
  function minus(){
    setcounter(counter-1);
    console.log(counter)
  }
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
