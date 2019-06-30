import React, { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle } from 'react';
import './index.scss';
import classnames from 'classnames';

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
      <div style={{height: `${height}px`}} className={loadingBarInnerClasses}></div>
    </div>
  )
}

LoadingBar.defaultProps = {
  height: 2
}

export default React.forwardRef(LoadingBar);
