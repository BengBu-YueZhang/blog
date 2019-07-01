import React from 'react';

export interface IAnimation {
  from?: object;
  to?: object;
  duration?: number;
  animation?: boolean;
  timingFunction?: string;
  children: React.ReactNode;
}

const Animation = (props: IAnimation) => {
  const { children, animation, to, from, duration, timingFunction } = props;
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

Animation.defaultProps = {
  from: {},
  to: {},
  duration: 200,
  animation: true,
  timingFunction: 'ease-in-out'
}

export default Animation;
