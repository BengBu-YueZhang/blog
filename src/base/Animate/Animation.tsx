import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

export interface IAnimation {
  from?: object;
  to?: object;
  duration?: number;
  animation?: boolean;
  timingFunction?: string;
  children: React.ReactNode;
}

const Animation: any = (props: IAnimation) => {
  const [visible, setVisible] = useState(false);
  const [isUnmount, setIsUnmount] = useState(false);
  const timer = useRef(0);

  const {
    children,
    animation = true,
    duration = 200,
    timingFunction = 'ease-in-out'
  } = props;

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

  const animationMode = visible ? to : from;

  const handleUnmount = () => {
    window.clearTimeout(timer.current);
    if (!animation) {
      timer.current = window.setTimeout(() => {
        setIsUnmount(true);
      }, duration);
    } else {
      setIsUnmount(false);
    }
  };

  const handleVisible = () => {
    if (isUnmount) {
      setVisible(animation);
    } else {
      window.setTimeout(() => {
        setVisible(animation);
      }, 30);
    }
  }

  useEffect(() => {
    handleUnmount();
    handleVisible();
  }, [animation]);

  // 不在渲染
  if (isUnmount) {
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
