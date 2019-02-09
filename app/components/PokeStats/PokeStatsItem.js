import React from 'react';

class PokeStatsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.stats,
      name: props.stats.stat.name,
      value: props.stats.stat.base_stat,
      color: "",
      percent: "",
    };
  }

  render() {
    return (
      <div>
        {' '}
        <b>{this.state.data.stat.name}</b> {this.state.data.base_stat}
      </div>
    );
  }
}

export default PokeStatsItem;
