import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <input
        type="search"
        // className="search-box"
        // placeholder="Search Monsters"
        // Best practice to change state in the component call as States are easily accessed.
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
