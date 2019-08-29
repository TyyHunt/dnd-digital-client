import React from 'react';
import { connect } from 'react-redux'
//import Race from './race'

export const RacesContainer = ({ race }) =>
  <div>
    <h1>Races</h1>
    {race.map(race =>
    <div>
      <img src={race.img_url} alt={race.name} />
      <h5>{race.name}</h5>
      <h5>{race.speed}</h5>
      <h5>{race.bonus}</h5>
      <h5>{race.size}</h5>
    </div>
    )}
  </div>;

const mapStateToProps = ({ race }) => ({
  race,
});


export default connect(mapStateToProps)(RacesContainer);