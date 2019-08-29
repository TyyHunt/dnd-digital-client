import React from 'react';
import { connect } from 'react-redux'

export const WeaponsContainer = ({ weapons }) =>
  <div>
    <h1>Weapons</h1>
    {weapons.map(weapon =>
    <div>
      <h5>{weapon.name}</h5>
      <h5>{weapon.damage}</h5>
      <h5>{weapon.dmg_type}</h5>
    </div>
    )}
  </div>;

const mapStateToProps = ({ weapons }) => ({
 weapons,
});


export default connect(mapStateToProps)(WeaponsContainer);