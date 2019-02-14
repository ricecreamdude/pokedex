/*

Compose Pokemon data biography information and handle API calls

*/
import React from 'react';
import PokeType from '../PokeType';
import PokeSearch from '../PokeSearch';
import PokeStats from '../PokeStats';
import PokeBasic from '../PokeBasic';

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
      backgroundColor: 'rgb(120, 200, 80)'
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
      .then(
        result => {
          this.getTypeData(result.types)
          // this.setState({
          //   isLoaded: true,
          //   data: result,
          //   curPokemon: result.name,
          // });
          //Chains promise so getSpeciesData works async
          return this.getSpeciesData(result.id, result);
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  getSpeciesData(id, basicData){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(res => res.json())
      .then(
        result => {
          let typeData = this.getTypeData(basicData.types);
          this.setState({
            isLoaded: true,
            speciesData: result,
            data: basicData,
            curPokemon: basicData.name,
            typeData: typeData,
            backgroundColor: typeData[0].color
            })
          },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
    }

  //Uses Type fetching file to create type data array.  A pokemon's primary type
  // (type[0]) is used to determine color scheme of many components of the app
  // so we must typeData as part of application state
  getTypeData(typeArr){
    let typeData = []

    //For some reason in pokemon with many types, primary type listed as 2nd
    //type in types array so we are assigning appropriately here
    if (typeArr[1]){
      typeData[0] = getType(typeArr[1].type.name)
      typeData[1] = getType(typeArr[0].type.name)
    } else {
      typeData[0] = getType(typeArr[0].type.name)
    }

    return typeData;
  }



  render() {
    let styles = {
      pokemonTitleContainer: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        height: "60px",
        lineHeight: "60px",
        backgroundColor: this.state.backgroundColor,

      },
      pokemonTitle: {
        verticalAlign: "center",
        display: "inline-block",
        lineHeight: "normal",
        color: "white"
      },
      pokemonContainer: {
        margin: "15px 15px"
      }
    };

    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    // Only second type if it exists

    //Move all this to PokeType.js, return one or two components
    let primaryType = <PokeType type={data.types[0].type.name} />;
    let secondaryType;
    if (data.types[1]) {
      secondaryType = <PokeType type={data.types[0].type.name} />;
      primaryType = <PokeType type={data.types[1].type.name} />;
    } else {
      secondaryType = '';
    }

    console.log('POKEMON this.state', this.state)

    //TO DO - Make Pokemon name a component
    //TO DO - Fetch pokemon color codes from this file and pass them down
    //props data
    return (
      <div>
        <PokeSearch loadPokemon={this.getBasicData.bind(this)} />
        <div style={styles.pokemonTitleContainer}>
          <span style={styles.pokemonTitle}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</span>
        </div>
        <div style={styles.pokemonContainer}>
          <PokeBasic data={this.state.data} speciesData={this.state.speciesData} typeData={this.state.typeData}/>
          <PokeStats stats={data.stats} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
