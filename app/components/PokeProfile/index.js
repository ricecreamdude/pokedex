/* */

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class PokeProfile extends React.Component{


  parseHeight = function(h){ 
    return h/10 + " m"
  }

  parseWeight = (w) => {
    return (w/10).toFixed(1) + " kg"
  }

  parseCatch = (c) => {
    return c + "%"
  }

  // Get egg type, make egg names pretty
  parseEgg = (e) => {
    let str = '';
    for (let i = 0; i < e.length; i++){
      const eggType = e[i].name;
      let space = ', ';
      if (i + 1 == e.length){
        space = '';
      }
      str += eggType.charAt(0).toUpperCase() + eggType.slice(1) + space;
    }
    return str;
  }

  parseAbilities = (e) => {
    let str = '';

    for (let i = 0; i < e.length; i++){
      const ability = e[i].ability.name;
      let space = ', ';
      if (i + 1 == e.length){
        space = '';
      }
      str += ability.charAt(0).toUpperCase() + ability.slice(1) + space;
    }
    return str;
  }

  render() {
    let data = this.props.data;
    let species = this.props.speciesData;
 
    let proStats={
      height: this.parseHeight(data.height),
      weight: this.parseWeight(data.weight),
      catchRate: (species.capture_rate),
      maleRatio: "",
      femaleRatio: "",
      egg: this.parseEgg(species.egg_groups),
      hatch: species.hatch_counter * 250,
      abilities: this.parseAbilities(data.abilities),
      ev:""
    }
       

    let styles = {
      title:{
        fontWeight: "bold",
        fontSize: "0.8em"
      },
      row:{
        marginBottom: "10px"
      }
    }



    return(
      <div>
        <Row style={styles.row}>
          <Col md={2} style={styles.title}>Height: </Col>
          <Col md={4}>                     {proStats.height}</Col>
          <Col md={2} style={styles.title}>Weight: </Col>
          <Col md={4}>                     {proStats.weight}</Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.title}>Catch Rate: </Col>
          <Col md={4}>                     {proStats.catchRate}</Col>
          <Col md={2} style={styles.title}>Gender Ratio: </Col>
          <Col md={4}>                     87.5% m 12.5% f</Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.title}>Egg Groups: </Col>
          <Col md={4}>                     {proStats.egg}</Col>
          <Col md={2} style={styles.title}>Hatch Steps: </Col>
          <Col md={4}>                     {proStats.hatch}</Col>
        </Row>
        <Row style={styles.row}>
          <Col md={2} style={styles.title}>Abilities: </Col>
          <Col md={4}>                     {proStats.abilities}</Col>
          <Col md={2} style={styles.title}>EVs:</Col>
          <Col md={4}>                     1 Sp. Def</Col>
        </Row>
      </div>
      )
  }
}

export default PokeProfile;