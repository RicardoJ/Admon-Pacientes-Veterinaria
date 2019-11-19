import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewDate from "./components/NewDate";
import ListAppointments from "./components/ListAppointments";

class App extends Component {
  state = {

    appointments :[]

  };

  createNewDate = data =>{
      const appointments = [...this.state.appointments, data];

      this.setState({appointments})
  }
  render() {
    return (
      <div className="container">
        <Header titleHeader="Administrador paciente veterinaria" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate 
            createNewDate = {this.createNewDate}
            />
          </div>
          <div className =  "mt-5 col-md-10 mx-auto">
            <ListAppointments
            appointments = {this.state.appointments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
