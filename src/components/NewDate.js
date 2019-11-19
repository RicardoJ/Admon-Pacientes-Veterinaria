import React, { Component } from "react";
import uuid from 'uuid';

const stateMain ={
    appointment : {
        pet: "",
        owner: "",
        date: "",
        hour: "",
        symptoms: ""
      },
      error: false

}

class NewDate extends Component {
  state = {...stateMain};

  handleChange = e => {
    this.setState({
        appointment : {
        ...this.state.appointment,
        //[saber el formulario que se llena] : el valor ingresado
        [e.target.name]: e.target.value
      }
    });
  };
  //enviar formulario
  handleSubmit = e => {
    e.preventDefault();
    //extraer valores del state
    const { pet, owner, date, hour, symptoms } = this.state.appointment;

    if (
      pet === "" ||
      owner === "" ||
      date === "" ||
      hour === "" ||
      symptoms === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }

    //se genera objeto con los datos
    const newDate = {...this.state.appointment };
    newDate.id = uuid();
    //agregando la cita al state de App
    this.props.createNewDate(newDate);

    //se coloca en el state el stateMain
    this.setState({
        ...stateMain
    })

  };
  render() {
    const {error} = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agendar Citas</h2>
            {error ? <div className = "alert alert-danger mt-2 mb-5 text center">
                Campos obligatorios
            </div> : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            {/* form-group*/}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre dueño de la mascota"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            {/* form-group*/}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />
              </div>
            </div>
            {/* form-group*/}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Síntomas que presenta la mascota"
                  name="symptoms"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptoms}
                ></textarea>
              </div>
            </div>
            {/* form-group*/}

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NewDate;
