import React from 'react';

import Container from 'react-bootstrap/Container'

class PokeTitle extends React.Component{
  render(){

    let styles = {
      pokemonTitleContainer: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        height: "60px",
        lineHeight: "60px",
        backgroundColor: this.props.backgroundColor,

      },
      pokemonTitle: {
        verticalAlign: "center",
        display: "inline-block",
        lineHeight: "normal",
        color: "white"
      }
    }

    return(
      <div style={styles.pokemonTitleContainer}>
        <span style={styles.pokemonTitle}> {this.props.title} </span>
      </div>
      )
  }
}

export default PokeTitle;
