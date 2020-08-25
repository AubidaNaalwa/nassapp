import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Results from './Components/Results.jsx';
import Media from './Components/Media.jsx';

import './Styles/App.css';

export default function App() {
 
  const [searchResults, setSearchResults] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const noFavoritesMsg = 'You have no favorites...';
  const SearchLoadingMsg = 'Loading...';

  const getSearchResults = (searchField) => {
    axios.get(`/search/${searchField}`).then((res) => {
      setSearchResults(res.data);
    });
  };

  const getFavorites = () =>
    axios.get('/favorites').then((res) => {
      setFavoritesList(res.data);
    });

  const addToFavorites = (data) => {
    axios.post(`/favorites`, data).then((res) => {
      data.isFavorite = !data.isFavorite;
      setFavoritesList([...favoritesList, res.data]);
    });
  };

  const removeFromFavorites = (data) => {
    axios.delete(`/favorites/${data._id}`).then((res) => {
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
      <Route path="/" exact render={() => <Home />} />
      <Route
        path="/search"
        exact
        render={() => (
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
        render={() => (
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
