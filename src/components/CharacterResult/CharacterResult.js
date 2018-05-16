import React from 'react';

import logo from './img_avatar.png';

import('./characterResult.css');

export default function CharacterResult(props){

  const characters = props.characters.map(character => {
    return (
      <div className="card">
      <img className="cardImg" src={character.img} alt="Avatar" />
        <div className="container">
          <h4>{character.name}</h4> 
          <p>{character.role}</p>
        </div>
      </div>
    );
  });
  
  return (<div className="cardContainer">{characters}</div>);
}