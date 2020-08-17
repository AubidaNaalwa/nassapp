import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MediaCard from './MediaCard';
import '../Styles/Home.css';

export default function Home(props) {
  const [imageOfTheDay, seImageOfTheDay] = useState({});

  const API_KEY = 'P84jqZfmLAUJMami5uAzyephI2upidRPhytcdMKD';

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(
      (res) => {
        const data = {
          id: 'big',
          title: res.data.title,
          date: res.data.date,
          description: res.data.explanation,
          img: res.data.url,
        };
        seImageOfTheDay(data);
      }
    );
  }, []);

  return (
    <div className="big-media-container">
      <MediaCard key={imageOfTheDay.id} data={imageOfTheDay} />
    </div>
  );
}
