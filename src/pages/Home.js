import React, { Component } from "react";
import Table from "../components/Table";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBarForm from "../components/SearchBar";
import API from "../utils/API";

class Home extends Component {
  state = {
    employees: [],
    search: "",
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

  sortEmployees = () =>{
this.state.employees.filter((employee)=>{

 
})

  }


  render() {
    return (
      <div>
        <SearchBarForm ></SearchBarForm>
        <Table>
          {this.state.employees.map((employee) => {
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
