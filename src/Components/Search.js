import React from 'react';

import MediaCard from './MediaCard';
import '../Styles/Search.css';

export default function Search(props) {
  const { searchResults, toggleFavorite } = props;

  return (
    <div className="results-container">
      {!searchResults.length && <h1>Searching...</h1>}
      {searchResults.map((r) => (
        <MediaCard toggleFavorite={toggleFavorite} key={r.nasaId} data={r} />
      ))}
    </div>
  );
}
