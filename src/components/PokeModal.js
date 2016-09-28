import React, { Component } from 'react';
import PokemonStore from '../stores/PokemonStore';
import {Modal,ControlLabel} from 'react-bootstrap';

export default class PokeModal extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    }

    this._onChange = this._onChange.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount(){
    PokemonStore.startListening(this._onChange,'CHANGE');
  }

  componentWillUnmount(){
    PokemonStore.stopListening(this._onChange,'CHANGE');
  }

  _onChange(){
    this.setState({
      pokemon: PokemonStore.getPokemon(),
      showModal: true
    })
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    const {pokemon,showModal} = this.state;

    return (
      <div>
        {pokemon ?
          <div>
            <Modal id="poke-modal" bsSize="small" show={showModal} onHide={this.close}>
              <Modal.Header id="modal-inner" closeButton>
                <Modal.Title>{pokemon.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body id="modal-inner">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                <hr/>

                <ControlLabel>Weight:&nbsp;</ControlLabel>
                {pokemon.weight}&nbsp;lb
                <br/>

                <ControlLabel>HP:&nbsp;</ControlLabel>
                {pokemon.stats[5].base_stat}
                <br/>

                <ControlLabel>Attack:&nbsp;</ControlLabel>
                {pokemon.stats[4].base_stat}
                <br/>

                <ControlLabel>Defense:&nbsp;</ControlLabel>
                {pokemon.stats[3].base_stat}
                <br/>

                <ControlLabel>Speed:&nbsp;</ControlLabel>
                {pokemon.stats[0].base_stat}
                <br/>
              </Modal.Body>
            </Modal>
          </div>
        :null}
      </div>
    )
  }
}
