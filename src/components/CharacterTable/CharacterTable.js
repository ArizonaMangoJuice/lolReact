import React from 'react';

import CharacterCard from '../CharacterCard/CharacterCard';

import ('./CharacterTable.css');

export default function CharacterResult(props){

  const characters = props.characters.map(character => {
    return (
      <CharacterCard character = {character} />
    );
  });
  
  return (<div className="cardContainer">{characters}</div>);
}