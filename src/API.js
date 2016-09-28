import $ from 'jquery';
import ServerActions from './actions/ServerActions';

const API = {
  fetchPokemon(pokemon){
    $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,(data) => {
      //debugger;
      ServerActions.recievePokemon(data);
    });
  },

  fetchPokedex(){
    $.get('https://pokeapi.co/api/v2/pokedex/1',(data) => {
      //debugger;
      ServerActions.recievePokedex(data);
    });
  }
}

export default API;
