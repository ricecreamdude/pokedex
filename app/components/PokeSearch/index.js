/*

Search for Pokemon. Contains

*/

import React from 'react';

class PokeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Allows for changes to occur to the textbox and be tracked
  handleChange() {
    this.setState({ value: event.target.value });
  }

  // Submits submitted Pokemon name to PokemonData
  handleSubmit() {
    const pokemon = this.state.value;
    this.props.loadPokemon(pokemon);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Pokemon name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          style={{ border: `${1} black solid` }}
        />
      </form>
    );
  }
}

export default PokeSearch;
