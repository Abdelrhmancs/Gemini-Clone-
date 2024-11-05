import React from 'react';

function Card(props) {
  return (
    <div className='card'>
        <p>{props.title}</p>
        <img src={props.image} alt='' />
    </div>
  );
}

export default Card;