import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API = 'P84jqZfmLAUJMami5uAzyephI2upidRPhytcdMKD';

function App() {
  const [imageOfTheDay, seImageOfTheDay] = useState({});

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${API}`).then((res) =>
      seImageOfTheDay(res.data)
    );
  }, []);
  console.log(imageOfTheDay);
  return (
    <div>
      <h1>{imageOfTheDay.title}</h1>
      <h3>{imageOfTheDay.date}</h3>
      <img src={imageOfTheDay.url} alt="" />
      <p>{imageOfTheDay.explanation}</p>
    </div>
  );
}

export default App;
