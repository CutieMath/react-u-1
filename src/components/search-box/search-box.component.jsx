import React, { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, onChangeHandler, className }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`} // search-box here is a generalised style for the component
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
