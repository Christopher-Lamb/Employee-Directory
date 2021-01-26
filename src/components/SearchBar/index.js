import React, { Component } from "react";
import "./style.css";

class SearchBarForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      search: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log("Search State: " + this.state.search);

    return (
      <form className="center">
        <input
          placeholder="Enter Employee Name"
          onChange={this.handleInputChange}
          name="search"
          type="text"
          className="centerFormInput"
        ></input>
        <button
          data-search={this.state.search}
          onClick={this.props.handleClick}
          type="submit"
          className="centerFormBtn"
        >
          Submit
        </button>
      </form>
    );
  }
}
export default SearchBarForm;
