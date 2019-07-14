import React, { useEffect } from 'react';
import './index.scss';

const prefixClass = "yy-canvas";

const Canvas: React.FC = () => {

  useEffect(() => {
    return () => {
    }
  }, [])

  return (
    <canvas id="canvas" className={`${prefixClass}`} width="2560px" height="1440px"/>
  )
}

export default Canvas;