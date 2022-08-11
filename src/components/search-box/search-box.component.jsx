import React, { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`} // search-box here is a generalised style for the component
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
