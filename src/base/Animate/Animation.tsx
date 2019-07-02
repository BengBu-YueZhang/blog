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
  const [unmount, setUnmount] = useState(false);
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
        setUnmount(true);
      }, duration);
    } else {
      setUnmount(false);
    }
  };

  const handleVisible = () => {
    if (unmount) {
      setTimeout(() => {
        setVisible(animation);
      }, 0);
    } else {
      setVisible(animation);
    }
  }

  useLayoutEffect(() => {
    handleUnmount();
  }, [animation])

  useEffect(() => {
    handleVisible();
  }, [animation])

  if (unmount) {
    return null;
  }

  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, {
      style: {
        ...animationMode,
        transition: `all ${timingFunction} ${duration}ms`
      }
    })
  })
}

export default Animation;
