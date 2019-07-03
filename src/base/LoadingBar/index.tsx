import React, { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle } from 'react';
import './index.scss';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

const prefixClass = 'yy-loading-bar';

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
  const [width, setWidth] = useState(100);

  const loadingBarInnerClasses = classnames({
    [`${prefixClass}-inner`]: true,
    [`${prefixClass}-inner-success`]: status === LoadingBarStatus.SUCCESS,
    [`${prefixClass}-inner-error`]: status === LoadingBarStatus.ERROR
  });

  const loadingBarInnerStyles = {
    width: `${width}%`,
    height: `${height}px`
  };

  const reset = () => {
  };
  const start = () => {
  };
  const finish = () => {
  };
  const error = () => {
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

  console.log('执行')

  const loadingBarRef = React.createRef<any>();

  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<LoadingBarComponent ref={loadingBarRef} />, div);

  const destroy = () => {
    ReactDOM.unmountComponentAtNode(div);
    (div.parentNode as HTMLElement ).removeChild(div);
  }

  const { error, finish, start } = loadingBarRef.current;

  return {
    destroy,
    error,
    finish,
    start
  };
}

const instance = newInstance();

export default instance;
