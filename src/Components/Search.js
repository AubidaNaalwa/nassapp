import React from 'react';
import SearchBar from './SearchBar';
import MediaCard from './MediaCard';
import '../Styles/Search.css';

export default function Search(props) {
  const { getSearchResults, searchResults, toggleFavorite } = props;

  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <div className="results-container">
        {searchResults.map((r) => (
          <MediaCard toggleFavorite={toggleFavorite} key={r.nasaId} data={r} />
        ))}
      </div>
    </div>
  );
}
