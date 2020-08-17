import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Favorites from './Components/Favorites';

const API = 'P84jqZfmLAUJMami5uAzyephI2upidRPhytcdMKD';

function App() {
  const [imageOfTheDay, seImageOfTheDay] = useState({});
  const [marsWeather, setMarsWeather] = useState({});

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${API}`).then((res) =>
      seImageOfTheDay(res.data)
    );
    // axios(
    //   `https://api.nasa.gov/insight_weather/?api_key=${API}&feedtype=json&ver=1.0`
    // ).then((res) => setMarsWeather(res.data));
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <>
          <Route
            path="/"
            exact
            render={({ match }) => (
              <Home match={match} imageOfTheDay={imageOfTheDay} />
            )}
          />
          <Route
            path="/search"
            exact
            render={({ match }) => <Search match={match} />}
          />
          <Route
            path="/favorites"
            exact
            render={({ match }) => (
              <Favorites match={match} imageOfTheDay={imageOfTheDay} />
            )}
          />
          <Route
            path="/favorites/:id"
            exact
            render={({ match }) => (
              <Favorites match={match} imageOfTheDay={imageOfTheDay} />
            )}
          />
        </>
      </Router>
    </div>
  );
}

export default App;

/*

*/
