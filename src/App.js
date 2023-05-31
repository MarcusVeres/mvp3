import logo from "./logo.svg";
import "./App.css";
import WebsiteShowcase from "./WebsiteShowcase";

function App() {
  return (
    /*
    <div className="App">
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
    */
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WebsiteShowcase />
        </header>
        </div>
        */
    <div className="flex justify-center w-screen h-screen flex-center">
      <WebsiteShowcase />
    </div>
  );
}

export default App;
