import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MediaCard from './MediaCard';
import '../Styles/Home.css';

export default function Home(props) {
  const [imageOfTheDay, setImageOfTheDay] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:4000/pod`).then((res) => {
      setImageOfTheDay(res.data);
    });
  }, []);

  return (
    <div className="big-media-container">
      <MediaCard key={imageOfTheDay.id} data={imageOfTheDay} />
    </div>
  );
}
