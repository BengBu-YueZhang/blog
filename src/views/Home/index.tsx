import React, { useState } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import LoadingBar from '../../base/LoadingBar';

console.log(LoadingBar.start());

const Home: React.FC = () => {

  useLoadedEnd();

  return (
    <div>
    </div>
  )
}

export default Home;
