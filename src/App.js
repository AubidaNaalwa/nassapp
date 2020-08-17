import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Favorites from './Components/Favorites';

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Route path="/" exact render={({ match }) => <Home match={match} />} />
        <Route
          path="/search"
          exact
          render={({ match }) => <Search match={match} />}
        />
        <Route
          path="/favorites"
          exact
          render={({ match }) => <Favorites match={match} />}
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
