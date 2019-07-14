import React from 'react';
import './index.scss';
import useLoadedEnd from '../../base/useLoadedEnd';
import Waves from '../../base/Waves';

const prefixClass = "yy-login-view";

const Login: React.FC = () => {

  useLoadedEnd();

  return (
    <div className={`${prefixClass}`}>
      <Waves/>
      <div className={`${prefixClass}-login`}></div>
    </div>
  )
}

export default Login;
