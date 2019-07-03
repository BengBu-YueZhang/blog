import React, { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle } from 'react';
import './index.scss';
import classnames from 'classnames';
import ReactDOM from 'react-dom';

const prefixClass = 'yy-loading-bar';

export interface ILoadingBarProps {
  height?: number | string;
}

export enum LoadingBarStatus {
  UNSTART = 'unstart',
  START = 'start',
  ERROR = 'error',
  FINISH = 'finish'
}

const LoadingBar: React.FC<ILoadingBarProps> = (props, ref) => {
  const { height } = props;
  const [status, setStatus] = useState(LoadingBarStatus.UNSTART);

  const loadingBarInnerClasses = classnames({
    [`${prefixClass}-inner`]: true,
    [`${prefixClass}-inner-unstart`]: status === LoadingBarStatus.UNSTART,
    [`${prefixClass}-inner-start`]: status === LoadingBarStatus.START,
    [`${prefixClass}-inner-error`]: status === LoadingBarStatus.ERROR,
    [`${prefixClass}-inner-finish`]: status === LoadingBarStatus.FINISH
  })

  const loadingBarInnerStyles = {
  }

  useImperativeHandle(ref, () => ({
    start: () => {
    },
    finish: () => {
    },
    error: () => {
    }
  }));

  return (
    <div className={`${prefixClass}`}>
      <div
        style={{ height: `${height}px` }}
        className={loadingBarInnerClasses}
      />
    </div>
  );
};

LoadingBar.defaultProps = {
  height: 2
}

const LoadingBarComponent = React.forwardRef(LoadingBar);

let instance;

function newInstance() {
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

export default {
  newInstance
};
