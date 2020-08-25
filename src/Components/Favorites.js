import React from 'react';
import MediaCard from './MediaCard';

export default function Favorites(props) {
  const { favoritesList, toggleFavorite } = props;

  return (
    <div className="results-container">
      {!favoritesList.length ? (
        <h1>You have no favorites yet</h1>
      ) : (
        favoritesList.map((f) => (
          <MediaCard toggleFavorite={toggleFavorite} key={f._id} data={f} />
        ))
      )}
    </div>
  );
}
