import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Favorites from './Components/Favorites';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const getSearchResults = (searchField) =>
    axios(
      `https://images-api.nasa.gov/search?q=${searchField}&media_type=image`
    ).then((res) => {
      const data = res.data.collection.items.map((i) => ({
        nasaId: i.data[0].nasa_id,
        title: i.data[0].title,
        date: i.data[0].date_created,
        description: i.data[0].description,
        img: i.links[0].href,
      }));
      setSearchResults(data);
    });

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
    axios.delete(`http://localhost:4000/favorites/${data.id}`).then((res) => {
      data.isFavorite = !data.isFavorite;
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
      <Navbar />
      <>
        <Route path="/" exact render={({ match }) => <Home match={match} />} />
        <Route
          path="/search"
          exact
          render={({ match }) => (
            <Search
              toggleFavorite={toggleFavorite}
              searchResults={searchResults}
              getSearchResults={getSearchResults}
              match={match}
            />
          )}
        />
        <Route
          path="/favorites"
          exact
          render={({ match }) => (
            <Favorites
              toggleFavorite={toggleFavorite}
              favoritesList={favoritesList}
              match={match}
            />
          )}
        />
        <Route
          path="/favorites/:id"
          exact
          render={({ match }) => <Favorites match={match} />}
        />
      </>
    </Router>
  );
}

export default App;
