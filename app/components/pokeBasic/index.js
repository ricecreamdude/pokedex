import React from 'react';
import PokeType from '../PokeType'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


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

// Flavortext array is not in English at the same array location so we need to
//create logic to find the appropriate flavortext
//Function: Find English FlavorText
//Function: Find English Pokemon Name

  render(){
    let styles = {
      id:{
        fontSize: "1.8em",
        textAlign: "right"
      },
      typeContainer:{
        marginBottom: "20px"
      },
      typeCol: {
        margin: '0px auto'
      },
      pokeSprite: {
        width: '140px',
        height: '140px',
      },
      pokeSpriteContainer: {
        margin: '0px auto'
      },
      genusStyle: {
        marginBottom: '10px'
      }
    }

    let data = this.props.data;
    let speciesData = this.props.speciesData;
    let typeData = this.props.typeData;
    let primaryType = <PokeType name={typeData[0].name} color={typeData[0].color}/>;
    let secondaryType;

    //If there's more than one type display two types in the right order
    if (typeData[1]) {
      secondaryType = <PokeType color={typeData[1].color} name={typeData[1].name} />;
    } else {
      secondaryType = '';
    }

    return(
      <Container>
        <Row style={styles.typeContainer}>
          <Col style={styles.typeCol}>
            {primaryType}
            {secondaryType}
          </Col>
          <Col style={styles.id}>#{data.id}</Col>
        </Row>
        <Row>
          <Col>
            <img style={styles.pokeSprite} src={data.sprites.front_default}/>
          </Col>
          <Col>
            <div style={styles.genusStyle}>
              <strong>{speciesData.genera[2].genus}</strong>
            </div>
            <div>
              {speciesData.flavor_text_entries[1].flavor_text}
            </div>
          </Col>
        </Row>
      </Container>
    )}

}

export default PokeBasic;
