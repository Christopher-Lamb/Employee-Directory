import React, { Component } from "react";
import Table from "../components/Table";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

class Home extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees(100);
  }

  getEmployees = (query) => {
    API.getEmployeeData(query)
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Table>
          {this.state.employees.map((employee) => {
            return (
              <Row>
                <Col>
                  <img src={employee.picture.thumbnail}></img>
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
