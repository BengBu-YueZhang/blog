import React, { useState, useEffect, useRef } from 'react';
import Animation, { IAnimation } from './Animation';

function noop () {}

export interface IAnimationQueue extends IAnimation {
  interval: number;
  children: React.ReactNodeArray;
  onAnimationcEnd: () => any;
}

/**
 * 目前存在的问题
 * - 列表内删减的时候，没有动画效果，这个可能要参考一些React开源动画库的源码
 */
const AnimationQueue: any = (props: IAnimationQueue) => {
  // 指针，判断children中哪一个组件执行动画，但是在定时器中
  // 因为闭包的原因始终使用的旧的pointer，所以使用useRef实时获取pointer
  // 但是useRef的update不会触发render，所以state和ref一起使用
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
      // 停止之前的定时器，开始新的动画
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
      >{ child }</Animation>
    )
  })
}

export default AnimationQueue;
