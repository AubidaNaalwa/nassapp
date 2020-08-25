import React from 'react';
import MediaCard from './MediaCard';
import '../Styles/Search.css';

export default function Results(props) {
  const { results, toggleFavorite, noResultsMsg } = props;

  return (
    <div className="results-container">
      {!results.length && <h1>{noResultsMsg}</h1>}
      {results.map((result,index) => (
        <MediaCard
          toggleFavorite={toggleFavorite}
          key={index}
          data={result}
        />
      ))}
    </div>
  );
}
