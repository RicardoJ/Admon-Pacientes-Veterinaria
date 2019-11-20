import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewDate from "./components/NewDate";
import ListAppointments from "./components/ListAppointments";

class App extends Component {
  state = {

    appointments :[]

  };
//aplicacion carga
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointments');
    if (appointmentsLS) {
      this.setState({
        appointments : JSON.parse(appointmentsLS)
      })
    }
  }

  //eliminamos o agregamos nueva cita
  componentDidUpdate(){
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  createNewDate = data =>{
      const appointments = [...this.state.appointments, data];

      this.setState({appointments})
  }

  deleteDate = id =>{
    //copia del state
   const currentAppointments = [...this.state.appointments];

   //filter para sacar el elemento con  el id del arreglo
   const appointments = currentAppointments.filter(appointment => appointment.id !== id);
   //actualizar el state
   this.setState({
     appointments
   })
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
            deleteDate = {this.deleteDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
