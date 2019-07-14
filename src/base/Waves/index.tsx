// Thank you https://codepen.io/cidicles/pen/yKOzjP

import React, { useEffect } from 'react';
import './index.scss';

let destruction = false;

const waves = ['rgba(66, 165, 245, 1)', 'rgba(66, 165, 245, 0.4)'];

const prefixClass = "yy-canvas";

let i: number = 0;

const Canvas: React.FC = () => {

  let canvas!: HTMLCanvasElement;
  let ctx!: CanvasRenderingContext2D;

  const initCanvas = () => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  const draw = () => {
    if (destruction) {
      return false;
    }
    canvas.width = canvas.width;
    for(let j = waves.length - 1; j >= 0; j--) {
      const offset = i + j * Math.PI * 12;
      ctx.fillStyle = (waves[j]);
      const randomLeft = (Math.sin(offset/100)  + 1) / 2 * 200;
      const randomRight = (Math.sin((offset/100) + 10) + 1) / 2 * 200;
      const randomLeftConstraint = (Math.sin((offset/60)  + 2)  + 1) / 2 * 200;
      const randomRightConstraint = (Math.sin((offset/60)  + 1)  + 1) / 2 * 200;
      ctx.beginPath();
      ctx.moveTo(0, randomLeft + 100);
      ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight + 100);
      ctx.lineTo(canvas.width , canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, randomLeft + 100);
      ctx.closePath();
      ctx.fill();
    }
    i = i + 2;
    window.requestAnimationFrame(draw);
  }

  useEffect(() => {
    initCanvas();
    draw();
    return () => {
      destruction = true;
    }
  }, [])

  return (
    <canvas id="canvas" className={`${prefixClass}`} width="2560px" height="1440px" />
  )
}

export default Canvas;