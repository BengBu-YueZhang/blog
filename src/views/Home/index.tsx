import React from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';

const Home: React.FC = () => {

  useLoadedEnd();

  return (
    <div>Home</div>
  )
}

export default Home;
