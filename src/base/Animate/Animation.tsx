import React, { useEffect, useState } from 'react';

export interface IAnimation {
  from?: object;
  to?: object;
  duration?: number;
  animation?: boolean;
  timingFunction?: string;
  children: React.ReactNode;
}

const Animation: any = (props: IAnimation) => {
  const [state, setState] = useState(false);

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

  const animationMode = state ? to : from;

  useEffect(() => {
    setState(animation)
  }, [animation])

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
