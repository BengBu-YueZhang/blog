import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

export interface IAnimation {
  from?: object;
  to?: object;
  duration?: number;
  animation?: boolean;
  timingFunction?: string;
  children: React.ReactNode;
}

// TODO:关闭后是否保留DOM的配置
const Animation: any = (props: IAnimation) => {
  
  const {
    children,
    animation = true,
    duration = 200,
    timingFunction = 'ease-in-out'
  } = props;

  const timer = useRef(0);
  const [visible, setVisible] = useState({
    animation: false,
    unmount: !animation
  });

  let {
    to = {
      opacity: 1
    },
    from = {
      opacity: 0
    }
  } = props;

  to = { opacity: 1, ...to };
  from = { opacity: 0, ...from };

  const animationMode = visible.animation ? to : from;

  const handleVisible = () => {
    window.clearTimeout(timer.current);
    if (animation) {
      setVisible({
        animation: false,
        unmount: false
      })
      window.setTimeout(() => {
        setVisible({
          animation: true,
          unmount: false
        })
      }, 30)
    } else {
      setVisible({
        animation: false,
        unmount: false
      })
      timer.current = window.setTimeout(() => {
        setVisible({
          animation: false,
          unmount: true
        })
      }, duration);
    }
  }

  useEffect(() => {
    handleVisible();
  }, [animation]);

  if (visible.unmount) {
    return null;
  }

  if (!children) {
    return null;
  }

  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, {
      style: {
        ...animationMode,
        transition: `all ${timingFunction} ${duration}ms`
      }
    })
  });
}

export default Animation;
