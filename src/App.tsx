import logo from "./logo.svg";
import "./App.css";
import { MyProvider } from "./context";
import { Counter } from "./components/Counter";

const App: React.FC = () => {
  return (
    <MyProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 89955
          </a>
        </header>
        <Counter />
      </div>
    </MyProvider>
  );
};

export default App;
