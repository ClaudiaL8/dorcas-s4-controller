import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
// import api_token from "./data/api_token.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.listBar = this.listBar.bind(this);
  }

  // componentDidMount() {
  //   listBar();
  // }
  // aquí se pasan los valores de los input por
  //los parámetros que hemos enviado desde login.js
  // launchLogin(email, password) {
  //   const apiUserName = api_token.requests[2].data[0].value;
  //   const apiPassWord = api_token.requests[2].data[1].value;
  //   if (email === apiUserName && password === apiPassWord) {
  //     // listBar();
  //   } else {
  //     return alert("El usuario no está registrado");
  //   }
  // }
  listBar() {
    //esperando como accerder al token
  }

  render() {
    return (
      <div className="App">
        <Login />
        {/* <Login launchLogin={this.launchLogin}/> */}
      </div>
    );
  }
}

export default App;
