import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MediaCard from './MediaCard';
import '../Styles/Home.css';

export default function Home() {
  const [imageOfTheDay, setImageOfTheDay] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_PORT}/pod`).then((res) => {
      setImageOfTheDay(res.data);
    });
  }, []);

  return (
    <div className="big-media-container">
      <MediaCard key={imageOfTheDay.id} data={imageOfTheDay} />
    </div>
  );
}
