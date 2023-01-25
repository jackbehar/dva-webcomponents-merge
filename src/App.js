import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <va-checkbox
  description={null}
  error={null}
  hint={null}
  label="This is a cleverly-labelled checkbox"
  onBlur={function noRefCheck(){}}
/>
      <header className="App-header">
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
