import React from 'react'

const Race = props => {
  return (
    <div>
      <img src={props.img_url} alt={props.name} />
      <li>{props.name}</li>
      <li>{props.speed}</li>
      <li>{props.bonus}</li>
      <li>{props.size}</li>
    </div>
  );
};

export default Race;