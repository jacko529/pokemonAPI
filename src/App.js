import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/Layout/NavBar";
import Dashboard from './Components/Layout/Dashboard';
import Pokemon from './Components/pokemon/PokemonDisplay';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App homeBackground" >

          <NavBar />
          <div className="container">

            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
