import { Component } from "react";
import "./App.css";

class App extends Component {
  // local state
  // The component will be re-rendered when the state changes
  constructor() {
    super();
    this.state = {
      monsters: [], // initial state
      searchField: "", // keep track of customer input so when letters removed it gets updated
    };
    console.log("1. Constructor renders");
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
    console.log("3. Component did mount");
  }

  // What we want to render and re-render when the state changes
  render() {
    console.log("2. Component renders");

    // filter the monsters array based on the searchField
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {filteredMonsters.map((monster, index) => {
          return <h3 key={index}>{monster.name}</h3>;
        })}
      </div>
    );
  }
}

export default App;
