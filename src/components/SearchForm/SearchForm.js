import React from 'react';

import './SearchForm.css'

export default function SearchForm(props){
  return (
    <input id="test" type="text" onChange = {(e) => props.setSearchTerm(e.target.value)} placeholder="Search Champion"/>
  );
};