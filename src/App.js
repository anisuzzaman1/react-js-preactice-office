// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]); // Arrary Default value []
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className='container'>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
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
