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
  // visible避免一开始无法执行入场动画
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
      // 动画执行完成后，从body中删除dom
      timer.current = window.setTimeout(() => {
        setIsUnmount(true);
      }, duration);
    } else {
      setIsUnmount(false);
    }
  };

  const handleVisible = () => {
    if (isUnmount) {
      // 每次插入dom完成后，执行动画入场的效果
      window.setTimeout(() => {
        setVisible(animation);
      }, 30);
    } else {
      setVisible(animation);
    }
  }

  useEffect(() => {
    handleUnmount();
    handleVisible();
  }, [animation]);

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
