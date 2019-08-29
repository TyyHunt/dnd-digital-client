import React from 'react'

const Race = race => {

  
  return (
    <div>
      <img src={race.img_url} alt={race.name} />
      <h5>{race.name}</h5>
      <h5>{race.speed}</h5>
      <h5>{race.bonus}</h5>
      <h5>{race.size}</h5>
    </div>
    );
};

export default Race;