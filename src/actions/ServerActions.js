import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  recievePokemon(pokemon){
    AppDispatcher.dispatch({
      type: 'RECIEVE_POKEMON',
      payload: {pokemon}
    })
  },

  recievePokedex(pokedex){
    AppDispatcher.dispatch({
      type: 'RECIEVE_POKEDEX',
      payload: {pokedex}
    })
  }

}

export default ServerActions;
