import React from 'react';

import MediaCard from './MediaCard';
import '../Styles/Search.css';

export default function Search(props) {
  const { searchResults, toggleFavorite } = props;

  return (
    <div>
      <div className="results-container">
        {searchResults.map((r) => (
          <MediaCard toggleFavorite={toggleFavorite} key={r.nasaId} data={r} />
        ))}
      </div>
    </div>
  );
}
