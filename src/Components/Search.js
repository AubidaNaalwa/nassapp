import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MediaCard from './MediaCard';
import '../Styles/Search.css';

export default function Search(props) {
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = (searchField) =>
    axios(`https://images-api.nasa.gov/search?q=${searchField}`).then((res) => {
      const data = res.data.collection.items.map((i) => ({
        nasaId: i.data[0].nasa_id,
        title: i.data[0].title,
        date: i.data[0].date_created,
        description: i.data[0].description,
        img: i.links[0].href,
      }));
      setSearchResults(data);
    });
  return (
    <div>
      <SearchBar getSearchResults={getSearchResults} />
      <div className="results-container">
        {searchResults.map((r) => (
          <MediaCard key={r.id} data={r} />
        ))}
      </div>
    </div>
  );
}
