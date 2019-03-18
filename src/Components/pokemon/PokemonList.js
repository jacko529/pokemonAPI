import React, { Component } from 'react';
import PokemondCard from './PokemonCard';

export default class PokemonList extends Component {
  render() {
    return (
      <div className="row">
        <PokemondCard/>
      </div>
    )
  }
}
