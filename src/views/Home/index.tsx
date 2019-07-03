import React, { useState } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import LoadingBar from '../../base/LoadingBar';

const Home: React.FC = () => {

  useLoadedEnd();

  return (
    <div>
      <button onClick={LoadingBar.start}>start</button>
      <button onClick={LoadingBar.finish}>success</button>
      <button onClick={LoadingBar.error}>error</button>
      <button onClick={LoadingBar.reset}>reset</button>
    </div>
  );
}

export default Home;
