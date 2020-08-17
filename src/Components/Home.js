import React from 'react';
import MediaCard from './MediaCard';

export default function Home(props) {
  const { imageOfTheDay } = props;
  return (
    <div>
      <h1>{imageOfTheDay.title}</h1>
      <h3>{imageOfTheDay.date}</h3>
      <img src={imageOfTheDay.url} alt="" />
      <p>{imageOfTheDay.explanation}</p>
    </div>
  );
}
