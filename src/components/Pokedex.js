import React, { Component } from 'react';
import PokemonActions from '../actions/PokemonActions';
import PokemonStore from '../stores/PokemonStore';
import uuid from 'uuid';

export default class Pokedex extends Component {
  constructor() {
    super();
    PokemonActions.fetchPokedex();

    this.state = {
      loaded: false
    }

    this._onChange = this._onChange.bind(this);
    this.preparePokedex = this.preparePokedex.bind(this);
  }

  componentWillMount(){
    PokemonStore.startListening(this._onChange,'LOADED');
  }

  componentWillUnmount(){
    PokemonStore.stopListening(this._onChange,'LOADED');
  }

  _onChange(){
    this.setState({
      pokedex: PokemonStore.getPokedex(),
      loaded: true
    })
  }

  preparePokedex(){
    let pokedex = [];

    if(this.state.loaded == false){
      pokedex.push(<h6 key={uuid()} className="text-center">loading...</h6>);
    }else{
      this.state.pokedex.pokemon_entries.forEach((pokemon,index) => {
        if(index % 8 == 0 && index > 0){
          pokedex.push(<br key={uuid()}/>);
        }
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`;
        let img = (<img src={imgSrc}/>);
        pokedex.push(<button onClick={() => PokemonActions.fetchPokemon(pokemon.entry_number)} className="btn btn-default pokemon" key={uuid()}>{img}<br/>{pokemon.pokemon_species.name}</button>);
      });
    }

    return pokedex;
  }

  render() {
    const {pokedex} = this.state;

    return (
      <div id="pokedex">
        {this.preparePokedex()}
      </div>
    )
  }
}
