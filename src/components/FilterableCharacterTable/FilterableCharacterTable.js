import React from 'react';

import './filterablecharacter.css';


import CharacterResult from '../CharacterResult/CharacterResult';
import SeacrhForm from '../SearchForm/SearchForm';

export default class FilterableCharacterTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      characters: props.characters
    }
  }

  setSearchTerm(value){
    this.setState({searchTerm: value});
  }

  render(){
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });

    return (
      <div>
        <SeacrhForm setSearchTerm = {(input) => this.setSearchTerm(input)}/>
        <CharacterResult characters={filteredCharacters}/>
      </div>
    );
  }
}