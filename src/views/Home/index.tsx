import React, { useState } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import LoadingBar from '../../base/LoadingBar';

const Home: React.FC = () => {

  useLoadedEnd();

  return (
    <div>
      <button onClick={
        () => {
          LoadingBar.newInstance()
        }
      }>add</button>
    </div>
  )
}

export default Home;
