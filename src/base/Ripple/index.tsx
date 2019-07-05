import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import './index.scss';

const prefixClass = 'yy-ripple';

const xmlns = 'http://www.w3.org/2000/svg';

export interface IRipple {
  color?: string;
  duration?: number;
}

const Ripple: React.FC<IRipple> = (props, ref) => {
  const rippleRef = useRef(null);
  const { color = 'rgba(0, 0, 0, 0.2)', duration = 400 } = props;

  const createdRipple = (event: MouseEvent) => {
    const target = event.currentTarget;
    if (target !== null) {
      const { top, left, width } = (target as HTMLElement).getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const ripple = document.createElementNS(xmlns, 'svg');
      ripple.setAttribute('class', 'ripple');
      // 画圆
      const circle = document.createElementNS(xmlns, 'circle')
      circle.setAttribute('cx', x + '');
      circle.setAttribute('cy', y + '');
      circle.setAttribute('r', 0 + '');
      circle.setAttribute('fill', color);
      // 画扩散动画
      const expandAnimate = document.createElementNS(xmlns, 'animate');
      expandAnimate.setAttribute('attributeName', 'r');
      expandAnimate.setAttribute('dur', `${duration}ms`);
      expandAnimate.setAttribute('fill', 'freeze');
      expandAnimate.setAttribute('begin', 'indefinite');
      expandAnimate.setAttribute('to', width + '');
      // 画渐隐动画
      const fadeAnimate = document.createElementNS(xmlns, 'animate');
      fadeAnimate.setAttribute('attributeName', 'opacity');
      fadeAnimate.setAttribute('dur', `${duration}ms`);
      fadeAnimate.setAttribute('fill', 'freeze');
      fadeAnimate.setAttribute('begin', 'indefinite');
      fadeAnimate.setAttribute('to', 0 + '');
      // 填充svg标签
      circle.appendChild(expandAnimate);
      circle.appendChild(fadeAnimate);
      ripple.append(circle);

      rippleRef.current.appendChild(ripple)
      // 启动动画
      (expandAnimate as SVGAnimateElement).beginElement()
    }
  }

  useImperativeHandle(ref, () => ({
    createdRipple
  }));

  return (
    <div ref={rippleRef} className={`${prefixClass}-group`}></div>
  )
}

export default Ripple;
