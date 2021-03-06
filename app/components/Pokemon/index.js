/*
Compose Pokemon data biography information and handle API calls
*/

import React from 'react';
import Container from 'react-bootstrap/Container';

import PokeType from '../PokeType';
import PokeSearch from '../PokeSearch';
import PokeStats from '../PokeStats';
import PokeBasic from '../PokeBasic';
import PokeProfile from '../PokeProfile';

import PokeTitle from './title';

import getType from '../PokeType/getTypeData';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      curPokemon: 'bulbasaur',
      typeData: [],
      speciesData: [],
      backgroundColor: 'rgb(120, 200, 80)',
      statsData: [],
    };
  }

  // Runs right after component mounts onto app.  Usually used to control
  // API requests. Returns a promise
  componentDidMount() {
    this.fetchPokemonData(this.state.curPokemon);
  }

  async fetchPokemonData(name) {
    const data = await this.promiseGetBasicData(name);
    const promises = [
      this.promiseGetBasicData(name),
      this.promiseGetSpeciesData(data.id),
      this.promiseGetTypeData(data.types),
    ];

    Promise.all(promises).then(results => {
      const basic = results[0];
      const species = results[1];
      const type = results[2];

      this.setState({
        isLoaded: true,
        speciesData: species,
        data: basic,
        curPokemon: basic.name,
        typeData: type,
        backgroundColor: type[0].color,
        statsData: {
          hp: basic.stats[5],
          atk: basic.stats[4],
          def: basic.stats[3],
          spd: basic.stats[0],
          spAtk: basic.stats[2],
          spDef: basic.stats[1],
        },
      });
    });
  }

  promiseGetBasicData(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return fetch(url)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  promiseGetSpeciesData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return fetch(url)
      .then(res => res.json())
      .catch(e => {
        console.log('Error in getSpeciesData', e);
      });
  }

  promiseGetTypeData(typeArr) {
    const typeData = [];

    if (typeArr[1]) {
      typeData[0] = getType(typeArr[1].type.name);
      typeData[0].data = fetch(typeData[0].link).then(res => res.json());
      typeData[1] = getType(typeArr[0].type.name);
      typeData[1].data = fetch(typeData[1].link).then(res => res.json());
    } else {
      typeData[0] = getType(typeArr[0].type.name);
    }

    return typeData;
  }

  render() {
    const styles = {
      pokemonContainer: {
        margin: '15px 0px',
      },
    };

    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    // console.log('Pokemon Data: Data:', this.state.data);
    // console.log('Pokemon Data: Species Data:', this.state.speciesData);
    // console.log('Pokemon Data: Type Data:', this.state.typeData);

    return (
      <div>
        <PokeSearch loadPokemon={this.fetchPokemonData.bind(this)} />
        <PokeTitle
          title={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer}>
          <PokeBasic
            data={this.state.data}
            speciesData={this.state.speciesData}
            typeData={this.state.typeData}
          />
        </Container>
        <PokeTitle title="STATS" backgroundColor={this.state.backgroundColor} />
        <Container style={styles.pokemonContainer}>
          <PokeStats stats={data.stats} />
        </Container>
        <PokeTitle
          title="PROFILE"
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer}>
          <PokeProfile
            data={this.state.data}
            speciesData={this.state.speciesData}
          />
        </Container>

        {/* Need to refactor code to integrate type API calls here */}
        <PokeTitle
          title="DAMAGE WHEN ATTACKED"
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer} />
        <PokeTitle
          title="EVOLUTIONS"
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer} />
        <PokeTitle title="MOVES" backgroundColor={this.state.backgroundColor} />
        <Container style={styles.pokemonContainer} />
      </div>
    );
  }
}

export default Pokemon;
