import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import '../Styles/Home.css'
export default function Home(props) {
  const [imageOfTheDay, seImageOfTheDay] = useState({});

  const API = 'P84jqZfmLAUJMami5uAzyephI2upidRPhytcdMKD';

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${API}`).then((res) => {
      const data = {
        id: res.data.copyright,
        title: res.data.title,
        date: res.data.date,
        description: res.data.explanation,
        img: res.data.url,
      };
      seImageOfTheDay(data);
    });
  }, []);

  return (
    <div className='home-container'>
      <MediaCard key={imageOfTheDay.id} data={imageOfTheDay} />
    </div>
  );
}
