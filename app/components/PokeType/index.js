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
    const type = getType(this.props.type);
    return <div style={{ backgroundColor: type.color }}>{type.name}</div>;
  }
}

export default PokeType;
