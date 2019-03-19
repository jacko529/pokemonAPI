import React, { Component } from 'react'

import PokemonList from '../pokemon/PokemonList';

import styled from 'styled-components';



const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;


export default class Dashboard extends Component {

  removeAll()
{
    localStorage.clear('contacts');
}
componentDidUpdate(nextProps, nextState){
  
}
renderUserMessage(){
  var namePokemon = localStorage.getItem('contacts');

  if (namePokemon != null) {
    var namePokemon = localStorage.getItem('contacts');
    var indexs = localStorage.getItem('indexes');

    var res = namePokemon.split(",");
    var resindex = indexs.split(",");

    const unique_numbers = Array.from(new Set(res));
    const unique_indexs = Array.from(new Set(resindex));

    const last = unique_numbers.slice(-1);
    const indexes = unique_indexs.slice(-1);


      console.log(last);
      console.log(indexes);

    return (
      
      last.map(function(last, indexss){

      return   <StyledLink to={`pokemon/${last}`}>
      <li key={ indexss }>{last}</li>;
</StyledLink>
    }),

    indexes.map(function(indexes, index){

      return   <li key={ index }>{indexes}</li>;
    })
    );

    

       } else {
    return (
      <h2>Hey man! Add some pokemon</h2>
    );
  }
}



  render() {
    return (
      <div className="row">
              <div className="col">
              <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
            My pokemon
            <button
            onClick={() => this.removeAll()}
          >
            Clear all
          </button>
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
            { this.renderUserMessage() }

            </ul>
        </div>
        <div className="col main pt-5 mt-3">

              <PokemonList/>
              </div>
                </div>
        </div>
    )
  }
}
