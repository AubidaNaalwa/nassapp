import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Results from './Components/Results';
import Media from './Components/Media';
import './Styles/App.css';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const noFavoritesMsg = 'You have no favorites...';
  const SearchLoadingMsg = 'Loading...';

  const getSearchResults = (searchField) => {
    axios.get(`http://localhost:4000/search/${searchField}`).then((res) => {
      setSearchResults(res.data);
    });
  };

  const getFavorites = () =>
    axios.get('http://localhost:4000/favorites').then((res) => {
      setFavoritesList(res.data);
    });

  const addToFavorites = (data) => {
    axios.post(`http://localhost:4000/favorites`, data).then((res) => {
      data.isFavorite = !data.isFavorite;
      setFavoritesList([...favoritesList, res.data]);
    });
  };

  const removeFromFavorites = (data) => {
    axios.delete(`http://localhost:4000/favorites/${data._id}`).then((res) => {
      res ? (data.isFavorite = !data.isFavorite) : alert('Error');
      const index = favoritesList.findIndex((r) => data._id === r._id);
      const updatedArr = [...favoritesList];
      updatedArr.splice(index, 1);
      setFavoritesList(updatedArr);
    });
  };

  const toggleFavorite = (data) => {
    data.isFavorite ? removeFromFavorites(data) : addToFavorites(data);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Router>
      <Navbar getSearchResults={getSearchResults} />
      <Route path="/" exact render={({ match }) => <Home match={match} />} />
      <Route
        path="/search"
        exact
        render={({ match }) => (
          <Results
            toggleFavorite={toggleFavorite}
            results={searchResults}
            noResultsMsg={SearchLoadingMsg}
          />
        )}
      />
      <Route
        path="/favorites"
        exact
        render={({ match }) => (
          <Results
            toggleFavorite={toggleFavorite}
            results={favoritesList}
            noResultsMsg={noFavoritesMsg}
          />
        )}
      />
      <Route
        path="/favorites/:id"
        exact
        render={({ match }) => (
          <Media
            match={match}
            data={favoritesList.find((m) => m._id === match.params.id)}
          />
        )}
      />
    </Router>
  );
}
