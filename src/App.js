import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  // - Pure function
  // Return exact same thing no matter how many times it is called
  // - Impure function
  // The value of the function is dependent on the value of the parameters
  // - Side effects
  // A function create some change outside of itself
  // - Note: React will create impure functions using hooks

  // UseState hook encapsulate State in a component function
  // When state changes, the component re-renders
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  // Use fetch only here will cause an infinite
  // Because the fetch sets the state => Component re-render => fetch runs again to set a new state
  // To resolve this, use useEffect hook
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    },
    // Dependency array, State or props
    // If not provided, it will only run when the component is mounted
    []
  );

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <h1 className="app-title">Cute Monsters</h1>
      <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
