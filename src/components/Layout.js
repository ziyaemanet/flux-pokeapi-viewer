import React, { Component } from 'react';

import Pokedex from './Pokedex';
import PokeModal from './PokeModal';
import GetPokemon from './GetPokemon';

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Flux Pokéapi Viewer</h1>
        <hr/>
        <GetPokemon/>
        <hr/>
        <Pokedex/>
        <PokeModal/>
      </div>
    )
  }
}
