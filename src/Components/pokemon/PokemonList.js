import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../Layout/Loading';
import axios from 'axios';




export default class PokemonList extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null,
    val: 0
  };
  onTextChange(val) {
    var newVal = val + this.state.val;
    this.setState({val: newVal});
}
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }


  render() {

    return (
<div className="container-fluid" id="main">

       

        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      
      </div>
 
    );
  }
}
