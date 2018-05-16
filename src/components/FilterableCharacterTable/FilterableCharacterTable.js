import React from 'react';

import './filterablecharacter.css';


import CharacterTable from '../CharacterTable/CharacterTable';
import SearchBar from '../SearchBar/SearchBar';

export default class FilterableCharacterTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      characters: props.characters
    }
  }

  setSearchTerm(searchTerm){
    this.setState({searchTerm});
  }

  render(){
    const characters = this.state.characters.filter(character =>
      character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div>
        <SearchBar onChange = {searchTerm => this.setSearchTerm(searchTerm)}/>
        <CharacterTable characters={characters}/>
      </div>
    );
  }
}