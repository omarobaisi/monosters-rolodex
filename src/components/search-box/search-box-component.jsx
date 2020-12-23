import React from 'react';
import './search-box-style.css';

export const SearchBox = ({ placeholder, searchChange }) => (
    <input
    className='search'
    type='search'
    placeholder={ placeholder }
    onChange={ searchChange }>
  </input>
)