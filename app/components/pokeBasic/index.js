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


    return(
      <div>
        <div>
          <div>
            {primaryType}
            {secondaryType}
          </div>
          <div> <span>#{data.id} </span></div>
        </div>
        <div>
          <div>
            <img src={data.sprites.front_default} />
          </div>
          <div>

            <div>
              {speciesData.genera[2].genus}
            </div>
            <div>
              {speciesData.flavor_text_entries[2].flavor_text}
            </div>
{/**/}
          </div>
        </div>
      </div>
      )
  }
}

export default PokeBasic;
