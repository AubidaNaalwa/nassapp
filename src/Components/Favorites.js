import React from 'react';
import MediaCard from './MediaCard';

export default function Favorites(props) {
  const { favoritesList, toggleFavorite } = props;

  return (
    <div>
      <div className="results-container">
        {favoritesList.map((f) => (
          <MediaCard toggleFavorite={toggleFavorite} key={f._id} data={f} />
        ))}
      </div>
    </div>
  );
}
