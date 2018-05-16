import React from 'react';

import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharacterResult(props){

  const characters = props.characters.map(character => {
    return (
      <CharacterCard character = {character} />
    );
  });
  
  return (
  <main>
    <div className="cardContainer">{characters}</div>
  </main>
  );
}