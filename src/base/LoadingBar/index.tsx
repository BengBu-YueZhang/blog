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
  const [visible, setVisible] = useState(0);

  // 使用percentTemp是避免定时器产生的闭包的问题
  const percentTemp = useRef(0);

  const loadingBarInnerClasses = classnames({
    [`${prefixClass}-inner`]: true,
    [`${prefixClass}-inner-success`]: status === LoadingBarStatus.SUCCESS,
    [`${prefixClass}-inner-error`]: status === LoadingBarStatus.ERROR
  });

  const loadingBarInnerStyles = {
    width: `${percent}%`,
    height: `${height}px`,
    opacity: visible
  };

  const clertTime = () => {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  const hide = () => {
    setVisible(0);
  }

  const show = () => {
    setVisible(1);
  }

  const start = () => {
    clertTime();
    if (timer) {
      return
    }
    setStatus(LoadingBarStatus.SUCCESS);
    show();
    timer = window.setInterval(() => {
      percentTemp.current += Math.floor(Math.random() * 5 + 1)
      if (percentTemp.current >= 90) {
        clertTime()
      }
      setPercent(percentTemp.current);
    }, 200)
  };

  const reset = () => {
    clertTime();
    hide()
    setPercent(0);
    setStatus(LoadingBarStatus.SUCCESS);
  };

  const finish = () => {
    clertTime();
    show();
    setStatus(LoadingBarStatus.SUCCESS);
    setPercent(100);
    window.setTimeout(() => {
      reset();
    }, 800);
  };

  const error = () => {
    clertTime();
    show();
    setStatus(LoadingBarStatus.ERROR);
    setPercent(100);
    window.setTimeout(() => {
      reset();
    }, 800);
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
