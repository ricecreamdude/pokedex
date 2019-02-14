import React from 'react';
import PokeType from '../PokeType'



class PokeBasic extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      types: props.data.types,
      img: props.data.sprites.front_default,
      id: props.data.id,
      genus: "",
      flavorText: "",
    }
  }

  componentDidMount(){
    fetch(this.props.data.species.url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            genus: result.genera[2].genus,
            flavorText: result.flavor_text_entries[1].flavor_text
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

  render(){

    let data = this.props.data;
    let speciesData = this.props.speciesData;
    let typeData = this.props.typeData;
    let primaryType = <PokeType name={typeData[0].name} color={typeData[0].color}/>;
    let secondaryType;

    if (typeData[1]) {
      secondaryType = <PokeType color={typeData[1].color} name={typeData[1].name} />;
    } else {
      secondaryType = '';
    }
    console.log('POKEBASIC this props basicData:', data)
    console.log('POKEBASIC this props speciesData:', speciesData)
    console.log('POKEBASIC this props typeData:', typeData)
    // <PokeType type={this.state.types[1].type.name}/>
    // <PokeType type={this.state.types[0].type.name}/>


    return(
      <div>
        {/*Break this out into its own component*/}
        <div>
          <div>
            {primaryType}
            {secondaryType}
          </div>
          <div> <span>#{this.state.id} </span></div>
        </div>
        <div>
          <div>
            <img src={this.state.img} />
          </div>
          <div>
            <div>
              {this.state.genus}
            </div>
            <div>
              {this.state.flavorText}
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default PokeBasic;
