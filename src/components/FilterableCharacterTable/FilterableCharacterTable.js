import React from 'react';

import CharacterTable from '../CharacterTable/CharacterTable';
import SearchBar from '../SearchBar/SearchBar';
import YouTube from 'react-youtube';

import './filterablecharacter.css';

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
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render(){
    const characters = this.state.characters.filter(character =>
      character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
        <SearchBar onChange = {searchTerm => this.setSearchTerm(searchTerm)}/>
        <CharacterTable characters={characters}/>
      </div>
    );
  }
}