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
          console.log('pokeBasic Species JSON:',result);
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

        <PokeType type={this.state.types[0].type.name}/>

  }

  render(){
    return(
      <div>
        {/*Break this out into its own component*/}
        <div>
          <div>
            <PokeType type={this.state.types[1].type.name}/>
            <PokeType type={this.state.types[0].type.name}/>
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
