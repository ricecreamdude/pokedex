/*
  Displays Pokmeon stats and sets color based on value.
  Inspiration: https://pokemondb.net/pokedex/bulbasaur
*/
import React from 'react';
import PokeStatsItem from './PokeStatsItem.js';

import Container from 'react-bootstrap/Container';

class PokeStats extends React.Component {

  render() {

    return (
      <Container>
        <PokeStatsItem title="HP" stats={this.props.stats[0]} /> {/* HP */}
        <PokeStatsItem title="Attack" stats={this.props.stats[1]} /> {/* ATK */}
        <PokeStatsItem title="Defense" stats={this.props.stats[2]} /> {/* DEF */}
        <PokeStatsItem title="Speed" stats={this.props.stats[3]} /> {/* SPD */}
        <PokeStatsItem title="Sp. Atk" stats={this.props.stats[4]} /> {/* SPATK */}
        <PokeStatsItem title="Sp .Def" stats={this.props.stats[5]} /> {/* SPDEF */}
      </Container>
    );
  }
}

export default PokeStats;
