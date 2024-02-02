import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleReorder = () => {
    setCount(5);
  };


  return (
    <>
      <div className="card">
        <p>
        Inventory count: {count}
        </p>
        <button onClick={increment}>
          +
          </button>
        <button onClick={decrement} disabled={!count}>
          -
          </button>
        {count === 0 && <Reorder onReorder={handleReorder} />}
      </div>
    </>
  )
}

export default App;
