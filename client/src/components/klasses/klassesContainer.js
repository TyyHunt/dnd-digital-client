import React from 'react';
import { connect } from 'react-redux'

export const KlassesContainer = ({ klasses }) =>
  <div>
    <h1>Classes</h1>
    {klasses.map(klass =>
    <div>
      <img src={klass.img_url} alt={klass.name} />
      <h5>{klass.name}</h5>
      <h5>{klass.hit_die}</h5>
    </div>
    )}
  </div>;

const mapStateToProps = ({ klasses }) => ({
  klasses,
});


export default connect(mapStateToProps)(KlassesContainer);