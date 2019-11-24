import React, { useState, useEffect, useRef } from 'react';
import Animation, { IAnimation } from './Animation';

function noop () {}

export interface IAnimationQueue extends IAnimation {
  interval: number;
  children: React.ReactNodeArray;
  onAnimationcEnd: () => any;
}

// TODO:列表内删减的时候，没有动画效果
// TODO:列表插入只能从后插入，不能做到从任意位置插入的动画
// 这个可能要参考一些React开源动画库的源码
const AnimationQueue: any = (props: IAnimationQueue) => {
  const [pointer, setPointer] = useState(0)

  const timer = useRef(0)
  const pointerTemp = useRef(0)

  const {
    children,
    animation = true,
    duration = 300,
    interval = 100,
    timingFunction = 'ease-in-out',
    onAnimationcEnd = noop
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

  const handleAnimationStateChange = (animation: boolean): void => {
    const len = children.length;
    const loop = function () {
      if (!animation && pointerTemp.current <= 0) {
        setPointer(0)
        pointerTemp.current = 0
        onAnimationcEnd && onAnimationcEnd()
      } else if (animation && pointerTemp.current >= len) {
        setPointer(len)
        pointerTemp.current = len
        onAnimationcEnd && onAnimationcEnd()
      } else {
        setPointer(prevPointer => {
          if (animation) {
            pointerTemp.current = prevPointer + 1
            return prevPointer + 1
          } else {
            pointerTemp.current = prevPointer - 1
            return prevPointer - 1
          }
        })
        timer.current = window.setTimeout(loop, interval);
      }
    }
    loop();
  }

  useEffect(() => {
    handleAnimationStateChange(animation);
    return () => {
      clearTimeout(timer.current);
    }
  }, [animation, children.length]);

  return React.Children.map(children, (child: any, index) => {
    return (
      <Animation
        animation={pointer > index}
        to={to}
        from={from}
        duration={duration}
        timingFunction={timingFunction}
      >
        { child }
      </Animation>
    )
  })
}

export default AnimationQueue;
