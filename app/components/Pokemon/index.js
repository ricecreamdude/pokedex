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
      statsData: []
    };
  }

  // Runs right after component mounts onto app.  Usually used to control
  // API requests. Returns a promise
  componentDidMount() {

    this.getBasicData(this.state.curPokemon);
  }

  // Make sure to pass NAME as STRING here
  getBasicData(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
      .then(res => res.json())
      .then( (json) => {
        this.getTypeData(json.types)
        // Chains promise so getSpeciesData works async
        return this.getSpeciesData(json);
      })
      .catch(err => console.log(err));
  }

  getSpeciesData(basicData){
    const url = `https://pokeapi.co/api/v2/pokemon-species/${basicData.id}/`
    fetch(url)
      .then(res => res.json())
      .then( result => {
        let typeData = this.getTypeData(basicData.types);
        this.setState({
          isLoaded: true,
          speciesData: result,
          data: basicData,
          curPokemon: basicData.name,
          typeData: typeData,
          backgroundColor: typeData[0].color,
          statsData: {
            hp: basicData.stats[5],
            atk: basicData.stats[4],
            def: basicData.stats[3],
            spd: basicData.stats[0],
            spAtk: basicData.stats[2],
            spDef: basicData.stats[1],
          }
        })
      }
    );
  }

  // Uses Type fetching file to create type data array.  A pokemon's primary type
  // (type[0]) is used to determine color scheme of many components of the app
  // so we must typeData as part of application state
  getTypeData(typeArr){
    let typeData = [];
    // For some reason in pokemon with many types, primary type listed as 2nd
    // type in types array so we are assigning appropriately here

    if (typeArr[1]) {
      typeData[0] = getType(typeArr[1].type.name)
      typeData[0].data = fetch(typeData[0].link).then(res => res.json());
      typeData[1] = getType(typeArr[0].type.name)
      typeData[1].data = fetch(typeData[1].link).then(res => res.json());
    } else {
      typeData[0] = getType(typeArr[0].type.name)
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

    console.log('Pokemon Data: Data:', this.state.data);
    console.log('Pokemon Data: Species Data:', this.state.speciesData);
    console.log('Pokemon Data: Type Data:', this.state.typeData);    


    return (
      <div>
        <PokeSearch loadPokemon={this.getBasicData.bind(this)} />
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
        <Container style={styles.pokemonContainer}> 
        </Container>
        <PokeTitle
          title="EVOLUTIONS"
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer}>
        </Container>
        <PokeTitle
          title="MOVES"
          backgroundColor={this.state.backgroundColor}
        />
        <Container style={styles.pokemonContainer}>
        </Container>
      </div>
    );
  }
}

export default Pokemon;
