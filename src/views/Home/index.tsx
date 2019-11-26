import React, { useState, useRef } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import LoadingBar from '../../base/LoadingBar';
import Button from '../../base/Button';
import WithRipple from '../../base/WithRipple';
import Drawer from '../../base/Drawer';
import Modal from '../../base/Modal';

const Home: React.FC = () => {

  const TestElement = WithRipple((
    <h1>标题</h1>
  ))
  const [visible, setVisible] = useState(false)

  useLoadedEnd();

  return (
    <div>
      <button onClick={() => {
        setVisible(true)
      }}>Click Drawer</button>
      <Drawer visible={visible}/>
      <Modal/>
      <button onClick={LoadingBar.start}>start</button>
      <button onClick={LoadingBar.finish}>success</button>
      <button onClick={LoadingBar.error}>error</button>
      <button onClick={LoadingBar.reset}>reset</button>
      <hr/>
      <Button>测试</Button>
      <br/>
      <Button type={'danger'}>测试2</Button>
      <hr/>
      <Button>测试测试测试测试测试测试</Button>
      <TestElement/>
    </div>
  );
}

export default Home;
