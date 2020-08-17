import React from 'react';
import MediaCard from './MediaCard';
import '../Styles/Home.css';

export default function Media(match) {
  const { data } = match;
  data['id'] = 'big';

  return (
    <div className="big-container">
      <MediaCard key={data.id} data={data} />
    </div>
  );
}
