import React from 'react';

export default function(props){
  return (
    <div className="card">
      <img className="cardImg" src={props.character.img} alt="Avatar" />
        <div className="container">
          <h4>{props.character.name}</h4> 
          <p>{props.character.role}</p>
        </div>
      </div>
  );
}