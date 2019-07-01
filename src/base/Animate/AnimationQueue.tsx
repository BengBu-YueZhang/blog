// Thank https://github.com/soWhiteSoColl/dodo-ui/blob/master/src/animate-queue/index.tsx
import React, { useState, useEffect } from 'react';
import Animation, { IAnimation } from './Animation';

export interface IAnimationQueue extends IAnimation {
  interval: number;
  children: React.ReactNodeArray
}

const AnimationQueue: any = (props: IAnimationQueue) => {

  const [pointer, setPointer] = useState(0)

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

  const handleAnimationStateChange = () => {
  }

  useEffect(() => {
  }, [animation, children.length])

  return (
    <div></div>
  )
}

export default AnimationQueue;
