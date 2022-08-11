import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <input
        type="search"
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
