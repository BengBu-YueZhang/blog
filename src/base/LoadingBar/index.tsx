import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './index.scss';
import classnames from 'classnames';

const prefixClass = 'yy-loading-bar';

export interface ILoadingProps {
  color?: string;
  failedColor?: string;
  height?: string;
}

const LoadingBar: React.FC<ILoadingProps> = () => {
  return (
    <div></div>
  )
}

export default LoadingBar
