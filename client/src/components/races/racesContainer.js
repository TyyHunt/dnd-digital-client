import React from 'react';
import { connect } from 'react-redux'
//import Race from './race'

export const RacesContainer = ({ races }) =>
  <div>
    <h1>Races</h1>
    {races.map(race =>
    <div>
      <img src={race.img_url} alt={race.name} />
      <h5>{race.name}</h5>
      <h5>{race.speed}</h5>
      <h5>{race.bonus}</h5>
      <h5>{race.size}</h5>
    </div>
    )}
  </div>;

const mapStateToProps = ({ races }) => ({
  races,
});


export default connect(mapStateToProps)(RacesContainer);