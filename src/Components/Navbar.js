import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import FlareIcon from '@material-ui/icons/Flare';
import '../Styles/Navbar.css';

export default function Navbar(props) {
  const { getSearchResults } = props;

  return (
    <div className="nav-container">
      <nav className="top-nav">
        <div className="nav-item ">
          <Link to="/">
            <img
              src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
              alt="nasa-logo"
            />
          </Link>
        </div>
        <div className="nav-item logo">
          <Link to="/favorites">
            <FlareIcon fontSize="large" color="primary" />
          </Link>
        </div>
      </nav>
      <div>
        <SearchBar getSearchResults={getSearchResults} />
      </div>
    </div>
  );
}
