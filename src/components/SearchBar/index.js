import React, { Component } from "react";

class SearchBarForm extends Component {
  state = {
    search: "",
  };

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      search: "",
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <input
          placeholder="Letter"
          value={this.state.search}
          name="search"
          onChange={this.handleInputChange}
          type="text"
        ></input>
        <button
          data-name={this.state.search}
          type="submit"
          onClick={this.handleClick}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default SearchBarForm;
