import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.jsx';
import MyComponent from './components/MyComponent';
import MyButtonLog from './components/ButtonLog';
import Numbers from './components/Numbers'
import Form from './components/Form'
import Calculator from './Calculator';
import NavBar from './components/navbar';

const users = [
  {id: 1, name: 'Faouzi', number: '1'},
  {id: 2, name: 'Nadim', number: '2'},
  {id: 3, name: 'Sami', number: '3'}
]

function App(props) {
  return (
    <div className="App">
      <div >
          <NavBar />
      </div>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1> Hello {props.user.name} </h1>
        </p>
        <p>
          Mandem is {props.user.age} old. He's also {props.user.nationality}.
        </p>
        <img src = {logo} className='User-avatar' alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <Clock />
        <MyButtonLog />
        <Numbers users={users} />
        <Form />
        <Calculator />

        
        
      </header>
    </div>
  );
}

export default App;
