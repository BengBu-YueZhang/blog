import React, { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle } from 'react';
import './index.scss';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

const prefixClass = 'yy-loading-bar';

let timer!: number | null;

export interface ILoadingBarProps {
  height?: number | string;
}

export enum LoadingBarStatus {
  SUCCESS = 'success',
  ERROR = 'error'
}

const LoadingBar: React.FC<ILoadingBarProps> = (props, ref) => {
  const { height = 2 } = props;
  const [status, setStatus] = useState(LoadingBarStatus.SUCCESS);
  const [percent, setPercent] = useState(0);
  // 使用percentTemp是避免定时器产生的闭包的问题
  const percentTemp = useRef(0);

  const loadingBarInnerClasses = classnames({
    [`${prefixClass}-inner`]: true,
    [`${prefixClass}-inner-success`]: status === LoadingBarStatus.SUCCESS,
    [`${prefixClass}-inner-error`]: status === LoadingBarStatus.ERROR
  });

  const loadingBarInnerStyles = {
    width: `${percent}%`,
    height: `${height}px`
  };

  const clertTime = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  const reset = () => {
    clertTime();
    setPercent(0);
    setStatus(LoadingBarStatus.SUCCESS);
  };

  const start = () => {
    if (timer) {
      return
    }
    timer = window.setInterval(() => {
      percentTemp.current += Math.floor(Math.random() * 3 + 1)
      if (percentTemp.current >= 90) {
        clertTime()
      }
      setPercent(percentTemp.current);
    }, 200)
  };

  const finish = () => {
    clertTime();
    setPercent(100);
    setStatus(LoadingBarStatus.SUCCESS);
  };

  const error = () => {
    clertTime();
    setPercent(100);
    setStatus(LoadingBarStatus.ERROR);
  };

  useImperativeHandle(ref, () => ({
    reset,
    start,
    finish,
    error
  }));

  return (
    <div className={`${prefixClass}`}>
      <div
        style={loadingBarInnerStyles}
        className={loadingBarInnerClasses}
      />
    </div>
  );
};

const LoadingBarComponent = React.forwardRef(LoadingBar);

function newInstance() {

  const loadingBarRef = React.createRef<any>();

  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<LoadingBarComponent ref={loadingBarRef} />, div);

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLElement ).removeChild(div);
  }

  const { error, finish, start, reset } = loadingBarRef.current;

  return {
    destroy,
    error,
    finish,
    start,
    reset
  };
}

const instance = newInstance();

export default instance;
