import React, { Component } from 'react';import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from "./Components/Layout/NavBar";
import Dashboard from './Components/Layout/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container"><Dashboard/></div>
      </div>
    );
  }
}

export default App;
