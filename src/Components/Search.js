import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MediaCard from './MediaCard';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SearchBar />
    </div>
  );
}
