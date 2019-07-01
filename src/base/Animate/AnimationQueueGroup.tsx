// Thank https://github.com/soWhiteSoColl/dodo-ui/blob/master/src/animate-queue/index.tsx
import React, { useEffect, useState } from 'react';

export interface IAnimationQueueGroup {
  animation?: boolean;
  children: React.ReactNodeArray;
}

const AnimationQueueGroup: any = (props: IAnimationQueueGroup) => {
  const [pointer, setPointer] = useState(0)

  const {
    children,
    animation = true,
  } = props;

  const handleAnimationcEnd = () => {
    const len = children.length;
    if (!animation && pointer <= 0) {
      setPointer(0)
    } else if (animation && pointer >= len) {
      setPointer(len)
    } else {
      setPointer(prevPointer => {
        if (animation) {
          return prevPointer + 1
        } else {
          return prevPointer - 1
        }
      })
    }
  }

  useEffect(() => {
    handleAnimationcEnd()
  }, [animation])

  return React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      onAnimationcEnd: handleAnimationcEnd,
      animation: pointer > index
    })
  })
}

export default AnimationQueueGroup;
