import API from '../API';

const PokemonActions = {
  fetchPokemon(pokemon){
    API.fetchPokemon(pokemon);
  },

  fetchPokedex(){
    API.fetchPokedex();
  }
}

export default PokemonActions;
