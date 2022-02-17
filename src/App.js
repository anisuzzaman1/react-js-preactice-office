import logo from './logo.svg';
import './App.css';

function App() {
  const number = 5555;
  const singer = { name: 'Dr. Mahfuz', job: 'Singer' }
  const singer2 = { name: 'Eva Rahman', job: 'Kokil Konthi' }

  const singerStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '15px',
    padding: '15px'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3> Yo Yo react Mama !!!</h3>
        <p>Happy React</p>
        <div className='container'>
          <h3>
            This is my Inside Header
          </h3>
          <p>My Number is: {number}</p>
          <p>Name: {singer.name} and Profession: {singer.job}</p>
          <p style={singerStyle}>Real Singer: {singer2.name} and Original: {singer2.job}</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
