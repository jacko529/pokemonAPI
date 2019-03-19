import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/Layout/NavBar";
import Dashboard from './Components/Layout/Dashboard';
import Pokemon from './Components/pokemon/Pokemon';
import mypokemon from './Components/pokemon/Mypokemon';
import SimpleStorage from "react-simple-storage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >

          <NavBar />
          <div className="container">

            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route path="/pokemon/mypokemon" component={mypokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
