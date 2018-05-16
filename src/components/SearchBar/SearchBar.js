import React from 'react';

import './SearchBar.css'

export default function SearchForm(props){
  return (
    <nav>
      <input id="test" type="text" onChange = {e => props.onChange(e.target.value)} placeholder="Search Champion"/>
    </nav>
  );
};