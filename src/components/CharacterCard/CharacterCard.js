import React from 'react';

import ('./CharacterCard.css');

export default function(props){
  return (
    <article className="card">
      <img className="cardImg" src={props.character.img} alt="Avatar" />
        <div className="container">
          <h4>{props.character.name}</h4> 
          <p>{props.character.role}</p>
        </div>
      </article>
  );
}