/* Fetch pokemon type attributes from Pokemon API data and return
styled HTML elements with appropriate color

This will be used to provide information for:
    Pokemon's primary and secondary Types
    Pokemon's type weakness/strengths in battle
*/
import React from 'react';
import types from './types';

class PokeType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  render(props) {
    if (error) {
      return <div> ERR </div>;
    }
    const type = types(this.props.type);

    // find color based in array
    return <div style={{ backgroundColor: type.color }}>{type.text}</div>;
  }
}

export default PokeType;
