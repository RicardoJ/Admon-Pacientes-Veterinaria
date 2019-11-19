import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewDate from "./components/NewDate";

class App extends Component {
  state = {

    appointment :[]

  };

  createNewDate = data =>{
      const appointment = [...this.state.appointment, data];

      this.setState({appointment})
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
        </div>
      </div>
    );
  }
}

export default App;
