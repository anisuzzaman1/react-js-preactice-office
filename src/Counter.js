// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    return (
        <div className="App">
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrese = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrese}>Increase (+)</button>
            <button onClick={handleDecrease}>Decrease (-)</button>
        </div>
    );
}


export default App;
