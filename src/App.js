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
    console.log(1);
  }

  // lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) =>
        this.setState(
          () => {
            return { monsters: monsters };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    console.log(3);
  }

  // What we want to render
  render() {
    console.log(2);
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => {
          return <h3 key={index}>{monster.name}</h3>;
        })}
      </div>
    );
  }
}

export default App;
