import React, { useEffect, useState, useRef } from 'react';
import './index.scss';

const prefixClass = 'yy-ripple';

const xmlns = 'http://www.w3.org/2000/svg';

export interface IRipple {
  color?: string;
  duration?: number;
}

const Ripple: React.FC<IRipple> = (props) => {
  const rippleRef = useRef(null);
  return (
    <div ref={rippleRef} className={`${prefixClass}`}></div>
  )
}

Ripple.defaultProps = {
  color: 'rgba(0, 0, 0, 0.2)',
  duration: 400
}

export default Ripple;
