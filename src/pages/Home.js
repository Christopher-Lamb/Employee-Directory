import React, { Component } from "react";
import Table from "../components/Table";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBarForm from "../components/SearchBar";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedEmployee: [],
      displayedEmployees: [],
      search: "",
    };
  }

  componentDidMount() {
    this.getEmployees(100);
  }

  getEmployees = (query) => {
    API.getEmployeeData(query)
      .then((res) =>
        this.setState({
          storedEmployees: res.data.results,
          displayedEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  searchEmployeesBtn = (event) => {
    event.preventDefault();

    const search = event.target.attributes
      .getNamedItem("data-search")
      .value.split("");
    const length = search.length;
    console.log(search);

    const searchedEmployee = this.state.storedEmployees.filter((employee) => {
      const existingEmp = employee.name.first + " " + employee.name.last;
      const empArray = existingEmp.split("");

      for (let i = 0; i < length; i++) {
        if (empArray[i] === search[i]) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    });
    console.log(searchedEmployee);
    this.setState({
      displayedEmployees: searchedEmployee,
    });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container">
        <SearchBarForm
          className="searchBar"
          handleClick={this.searchEmployeesBtn}
        ></SearchBarForm>
        <p style={{ textAlign: "center" }}>
          You can search an employee's full name or just search by letter.
        </p>
        <Table>
          {this.state.displayedEmployees.map((employee) => {
            return (
              <Row>
                <Col>
                  <img alt="Potrait" src={employee.picture.thumbnail}></img>
                </Col>
                <Col>
                  {employee.name.first} {employee.name.last}
                </Col>

                <Col>
                  {employee.location.city}, {employee.location.state}
                </Col>
                <Col>{employee.phone}</Col>
                <Col>{employee.email}</Col>
              </Row>
            );
          })}
        </Table>
      </div>
    );
  }
}

export default Home;
