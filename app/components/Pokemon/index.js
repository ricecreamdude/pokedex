/*

Use this file to compose Pokemon data biography

*/

import React from 'react';
import PokeType from '../PokeType';

class PokemonData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  // Runs right after component mounts onto app.  Usually used to control
  // API requests. Returns a promise
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff/')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    // Only second type if it exists
    const primaryType = <PokeType type={data.types[0].type.name} />;
    let secondaryType;
    if (data.types[1]) {
      secondaryType = <PokeType type={data.types[1].type.name} />;
    } else {
      secondaryType = '';
    }

    return (
      <div>
        {primaryType}
        {secondaryType}
        <ul>
          <li>Pokemon Data retrieved successfully</li>
          {/* Pokemon Name */}
          <li> Pokemon Name: {data.name} </li>
          {/* Pokemon Type(s) */}
          <li> Pokemon Type: {data.types[0].type.name} </li>
          {/* Pokemon Sprite */}
          <li>
            <img src={data.sprites.front_default} alt="" />
          </li>
          {/* Pokemon Stats */}
          Stats
          <ul>
            <li>HP: {data.stats[5].base_stat}</li>
            <li>Attack: {data.stats[4].base_stat}</li>
            <li>Defense: {data.stats[3].base_stat}</li>
            <li>Speed: {data.stats[0].base_stat}</li>
            <li>Sp Atk: {data.stats[2].base_stat}</li>
            <li>Sp Def: {data.stats[1].base_stat}</li>
          </ul>
          {/* Pokemon Description Title */}
          <li> Pokemond ID: #{data.id} </li>
          {/* Pokemon Description */}
        </ul>
      </div>
    );
  }
}

export default PokemonData;
