import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // local state
  // The component will be re-rendered when the state changes
  constructor() {
    super();
    this.state = {
      name: "Cutie",
    };
  }

  // What we want to render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>{this.state.name} x</code>
          </p>
          <button onClick={() => this.setState({ name: "CutiePie" })}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
