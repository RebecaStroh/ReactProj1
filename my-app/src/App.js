import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Project 1 </p>
      </header>
      <div style={{marginTop: '20px', justifyContent: 'center', display: 'flex'}}>
        <Form/>
      </div>
    </div>
  );
}

export default App;
