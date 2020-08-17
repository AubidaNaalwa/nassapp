import React from 'react';
import Media from './Media';
export default function MediaCard(props) {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <img src={data.img} alt="img" />
      <p>{data.description}</p>
    </div>
  );
}
