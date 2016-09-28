import React, { Component } from 'react';
import PokemonActions from '../actions/PokemonActions';
import {InputGroup,FormControl,Button} from 'react-bootstrap'

export default class GetPokemon extends Component {
  constructor() {
    super();

    this.fetchPokemon = this.fetchPokemon.bind(this);
  }


  fetchPokemon(){
    let {pokemon} = this.refs;
    PokemonActions.fetchPokemon(pokemon.value);
    pokemon.value = '';
  }

  render() {
    return (
      <div style={{"width":"248px"}} className="input-group">
        <input style={{"width":"200px","height":"33px"}} ref="pokemon" type="text" className="form-control" placeholder="get by name or id"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.fetchPokemon}>Go!</button>
        </span>
      </div>
    )
  }
}
