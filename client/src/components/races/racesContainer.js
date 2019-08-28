import React, { Component } from 'react';
import { connect } from 'react-redux'
import Race from './race'

class RacesContainer extends Component {

  renderRaces = () => this.props.races.map((race, id) => <Race key={id} race={race} />)

  render() {
    return(
      <div>
        {this.renderRaces()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    races: state.races
  }
}

export default connect(mapStateToProps)(RacesContainer);