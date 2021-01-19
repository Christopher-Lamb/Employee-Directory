import React, { Component } from "react";
import Table from "../components/Table";
import Row from "../components/Row";
import API from "../utils/API";

class Home extends Component {
  state = {
    employee: [],
  };

  getEmployees = (query) => {
    API.getEmployeeData(query).then((res) => {
      this.setState({
        employees: res.data.results,
      });
    });
  };

  render() {
    return (
      <div>
        <Table>
          <Row></Row>
        </Table>
      </div>
    );
  }
}

export default Home;
