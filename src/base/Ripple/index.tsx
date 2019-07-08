import React, { useRef, useImperativeHandle } from 'react';
import './index.scss';

const prefixClass = 'yy-ripple';

const xmlns = 'http://www.w3.org/2000/svg';

export interface IRipple {
  color?: string;
  duration?: number;
}

const RippleComponent: React.FC<IRipple> = (props, ref) => {
  const rippleRef = useRef<HTMLDivElement>(null);
  const { color = 'rgba(0, 0, 0, 0.2)', duration = 400 } = props;

  const createdRipple = (event: MouseEvent) => {
    const target = event.currentTarget;
    if (target !== null) {
      const { top, left, width } = (target as HTMLElement).getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const ripple = document.createElementNS(xmlns, 'svg');
      ripple.setAttribute('class', prefixClass);
      // 画一个圆
      const circle = document.createElementNS(xmlns, 'circle')
      circle.setAttribute('cx', x + '');
      circle.setAttribute('cy', y + '');
      circle.setAttribute('r', 0 + '');
      circle.setAttribute('fill', color);
      // 画扩散动画
      // TODO: 使用any是因为始终提示我，没有beginElement方法
      const expandAnimate: any = document.createElementNS(xmlns, 'animate');
      expandAnimate.setAttribute('attributeName', 'r');
      expandAnimate.setAttribute('dur', `${duration}ms`);
      expandAnimate.setAttribute('fill', 'freeze');
      expandAnimate.setAttribute('begin', 'indefinite');
      expandAnimate.setAttribute('to', width + '');
      // 画渐隐动画
      const fadeAnimate: any = document.createElementNS(xmlns, 'animate');
      fadeAnimate.setAttribute('attributeName', 'opacity');
      fadeAnimate.setAttribute('dur', `${duration}ms`);
      fadeAnimate.setAttribute('fill', 'freeze');
      fadeAnimate.setAttribute('begin', 'indefinite');
      fadeAnimate.setAttribute('to', 0 + '');
      // 填充svg标签
      circle.appendChild(expandAnimate);
      circle.appendChild(fadeAnimate);
      ripple.append(circle);
      if (rippleRef.current !== null) {
        rippleRef.current.appendChild(ripple)
      }
      // 启动动画
      expandAnimate.beginElement()

      const remove = () => {
        target.removeEventListener('mouseup', remove)
        target.removeEventListener('mouseout', remove)
        // 渐隐动画
        fadeAnimate.beginElement()
        setTimeout(() => {
          if (rippleRef.current !== null) {
            // 删除dom
            rippleRef.current.removeChild(ripple)
          }
        }, duration)
      }

      target.addEventListener('mouseout', remove)
      target.addEventListener('mouseup', remove)
    }
  }

  useImperativeHandle(ref, () => ({
    createdRipple
  }));

  return (
    <div ref={rippleRef} className={`${prefixClass}-group`}></div>
  )
}

const Ripple = React.forwardRef(RippleComponent);

export default Ripple;
