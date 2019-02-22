import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import colormap from 'colormap'


class PokeStatsItem extends React.Component {

  assignColor(stat){
    return Math.ceil(stat/180*100/2);
  }

  render() {
    //We are creating a color map for statBar render.
    let colorMap = colormap({
        colormap: 'cool',
        format: 'hex',
        nshades: 50,
        alpha: 1
    })

    let styles = {
      statName:{
        textAlign: "right",
        fontWeight: "bold",
      },
      statBar:{
        backgroundColor: colorMap[this.assignColor(this.props.stats.base_stat)],
        width: this.props.stats.base_stat/180*100 +"%",
        height: "20px",
        margin: "1px 0"

      }
    }


    return (
      <Row>
        <Col xs={2} style={styles.statName}>
          {this.props.title}
        </Col>
        <Col xs={1}>
          {this.props.stats.base_stat}
        </Col>
        <Col xs={7}>
          <div style={styles.statBar}></div>
        </Col>
        <Col xs={2}>
          MAX
        </Col>
      </Row>
    );
  }
}

export default PokeStatsItem;
