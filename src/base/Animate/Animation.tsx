import React from 'react';

export interface IAnimation {
  from?: object;
  to?: object;
  duration?: number;
  animation?: boolean;
  timingFunction?: string;
  children: React.ReactNode;
}

const Animation: any = (props: IAnimation) => {
  const {
    children,
    animation = true,
    to = {},
    from = {},
    duration = 200,
    timingFunction = 'ease-in-out'
  } = props;
  const animationMode = animation ? to : from;
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
