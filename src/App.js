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

  // Extract the function so it's not initalized everytime the component renders
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // What we want to render and re-render when the state changes
  render() {
    console.log("2. Component renders");

    // use object destructuring for cleaner code
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // filter the monsters array based on the searchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          // Best practice to change state in the component call as States are easily accessed.
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster, index) => {
          return <h3 key={index}>{monster.name}</h3>;
        })}
      </div>
    );
  }
}

export default App;
