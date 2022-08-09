import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // local state
  // The component will be re-rendered when the state changes
  constructor() {
    super();
    this.state = {
      monsters: [], // initial state
    };
  }

  // lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // What we want to render
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => {
          return <div key={index}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
