import React, { useState } from 'react';
import './index.scss';
import useLoadedEnd from '../../base/useLoadedEnd';
import Waves from '../../base/Waves';
import Input from '../../base/Input';
import Button from '../../base/Button';
import Animate from '../../base/Animate'

const Animation = Animate.Animation

const prefixClass = "yy-login-view";

const Login: React.FC = () => {

  const [ isShowRegister, setIsShowRegister ] = useState(false);

  useLoadedEnd();

  const handleRegisterClick = () => {
    setIsShowRegister(true);
  }

  const handleBackClick = () => {
    setIsShowRegister(false)
  }

  return (
    <div className={`${prefixClass}`}>
      <Waves />
      <div className={`${prefixClass}-login`}>
        <Animation animation={!isShowRegister}>
          <div>
            <div className={`${prefixClass}-block`}>
              <Input label={'用户名'} full={true} icon={'iconuser'} />
            </div>
            <div className={`${prefixClass}-block`}>
              <Input label={'密码'} full={true} icon={'iconlock'} />
            </div>
            <div className={`${prefixClass}-buttons`}>
              <div className={`${prefixClass}-block`}>
                <Button full={true}>登录</Button>
              </div>
              <div className={`${prefixClass}-block`}>
                <Button full={true} onClick={handleRegisterClick}>注册</Button>
              </div>
            </div>
          </div>
        </Animation>
        <Animation animation={isShowRegister}>
          <div>
            <div className={`${prefixClass}-block`}>
              <Input label={'用户名'} full={true} icon={'iconuser'} />
            </div>
            <div className={`${prefixClass}-block`}>
              <Input label={'密码'} full={true} icon={'iconlock'} />
            </div>
            <div className={`${prefixClass}-block`}>
              <Input label={'再次输入密码'} full={true} icon={'iconlock'} />
            </div>
            <div className={`${prefixClass}-block`}>
              <Button full={true} onClick={handleBackClick}>注册</Button>
            </div>
            <div className={`${prefixClass}-block`}>
              <Button full={true} onClick={handleBackClick}>返回</Button>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  )
}

export default Login;
