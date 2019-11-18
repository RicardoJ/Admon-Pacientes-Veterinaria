import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <Header titulo="Administrador paciente veterinaria" />
      </div>
    );
  }
}

export default App;
