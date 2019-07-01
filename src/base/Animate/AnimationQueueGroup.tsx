// Thank https://github.com/soWhiteSoColl/dodo-ui/blob/master/src/animate-queue/index.tsx
import React, { useEffect, useState } from 'react';

export interface IAnimationQueueGroup {
  animation?: boolean;
  children: React.ReactNodeArray;
}

const AnimationQueueGroup: any = (props: IAnimationQueueGroup) => {
  const [pointer, setPointer] = useState(0)

  const [state, setState] = useState(false)

  const {
    children,
    animation = true,
  } = props;

  const handleAnimationcEnd = () => {
    const len = children.length;
    if (!state && pointer <= 0) {
      setPointer(0)
    } else if (state && pointer >= len) {
      setPointer(len)
    } else {
      setPointer(prevPointer => {
        if (state) {
          return prevPointer + 1
        } else {
          return prevPointer - 1
        }
      })
    }
  }

  // 为了避免handleAnimationcEnd多次执行第三个分支
  useEffect(() => {
    setState(animation)
    handleAnimationcEnd()
  }, [state, animation])

  return React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      onAnimationcEnd: handleAnimationcEnd,
      animation: pointer > index
    })
  })
}

export default AnimationQueueGroup;
