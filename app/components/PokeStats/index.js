import React from 'react'
import PokeStatsItem from './PokeStatsItem.js'


class PokeStats extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stats: {
        hp:       props.stats[5],
        atk:      props.stats[4],
        def:      props.stats[3],
        spd:      props.stats[0],
        spAtk:    props.stats[2],
        spDef:    props.stats[1]
      }
    }
  }

  render(){
    return(
      <div>
        <h3> STATS </h3>
        <PokeStatsItem stats={this.state.stats.hp}  />   {/*HP*/}
        <PokeStatsItem stats={this.state.stats.atk}  />   {/*ATK*/}
        <PokeStatsItem stats={this.state.stats.def}  />   {/*DEF*/}
        <PokeStatsItem stats={this.state.stats.spd}  />   {/*SPD*/}
        <PokeStatsItem stats={this.state.stats.spAtk}  />   {/*SPATK*/}
        <PokeStatsItem stats={this.state.stats.spDef}  />   {/*SPDEF*/}
      </div>
    )
  }

};

export default PokeStats;
