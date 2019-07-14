import React from 'react';
import './index.scss';
import useLoadedEnd from '../../base/useLoadedEnd';
import Waves from '../../base/Waves';
import Input from '../../base/Input';
import Button from '../../base/Button';

const prefixClass = "yy-login-view";

const Login: React.FC = () => {

  useLoadedEnd();

  return (
    <div className={`${prefixClass}`}>
      <Waves/>
      <div className={`${prefixClass}-login`}>
        <div className={`${prefixClass}-block`}>
          <Input full={true}/>
        </div>
        <div className={`${prefixClass}-block`}>
          <Input full={true}/>
        </div>
        <div className={`${prefixClass}-block`}>
          <Button full={true}>登录</Button>
        </div>
        <div className={`${prefixClass}-block`}>
          <Button full={true}>注册</Button>
        </div>
      </div>
    </div>
  )
}

export default Login;
