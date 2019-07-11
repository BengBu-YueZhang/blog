import React, { useState, useRef } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import LoadingBar from '../../base/LoadingBar';
import Button from '../../base/Button';
import WithRipple from '../../base/WithRipple';

const Home: React.FC = () => {

  const TestElement = WithRipple((
    <div>123</div>
  ))

  useLoadedEnd();

  return (
    <div>
      <button onClick={LoadingBar.start}>start</button>
      <button onClick={LoadingBar.finish}>success</button>
      <button onClick={LoadingBar.error}>error</button>
      <button onClick={LoadingBar.reset}>reset</button>
      <hr/>
      <Button>测试</Button>
      <hr/>
      <Button>测试测试测试测试测试测试</Button>
      <TestElement/>
    </div>
  );
}

export default Home;
