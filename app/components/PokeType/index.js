/* Fetch pokemon type attributes from Pokemon API data and return
styled HTML elements with appropriate color

This will be used to provide information for:
    Pokemon's primary and secondary Types
    Pokemon's type weakness/strengths in battle

Try and learn if this is the proper way to code this
*/
import React from 'react';
import getType from './getTypeData';

class PokeType extends React.Component {

  render() {

    var typeStyle = {
      backgroundColor: this.props.color,
      float: "left",
      width: "90px",
      fontSize: "1.0em",
      color: "white",
      fontWeight: "bold",
      padding: "1px 0",
      textAlign: "center",
      marginRight: "5px"
    }
    console.log('POKETYPE PROPS', this.props);
    return (
      <div style={typeStyle}>{this.props.name.toUpperCase()}</div>
    )
  }
}

export default PokeType;
