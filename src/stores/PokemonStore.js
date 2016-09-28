import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon = null;
let _pokedex = null;

class PokemonStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECIEVE_POKEMON':
          _pokemon = action.payload.pokemon;
          this.emit('CHANGE');
          break;
        case 'RECIEVE_POKEDEX':
          _pokedex = action.payload.pokedex;
          this.emit('LOADED');
          break;
        default:
          console.log('INVALID_ACTION_TYPE');
          break;
      }
    });
  }

  startListening(callback,type){
    this.on(type,callback)
  }

  stopListening(callback,type){
    this.removeListener(type,callback);
  }

  getPokemon(){
    return _pokemon;
  }

  getPokedex(){
    return _pokedex;
  }

}

export default new PokemonStore();
