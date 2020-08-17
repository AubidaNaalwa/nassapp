import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-item">
        <Link to="/">
          <HomeIcon fontSize="large" color="primary" />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/search">
          <SearchIcon fontSize="large" color="primary" />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/favorites">
          <FavoriteIcon fontSize="large" color="primary" />
        </Link>
      </div>
      <div className="nav-item logo">
        <img
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
          alt="nasa-logo"
        />
      </div>
    </nav>
  );
}
