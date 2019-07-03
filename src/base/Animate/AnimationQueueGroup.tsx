import React, { useEffect, useState } from 'react';

export interface IAnimationQueueGroup {
  animation?: boolean;
  children: React.ReactNodeArray;
}

const AnimationQueueGroup: any = (props: IAnimationQueueGroup) => {
  const [pointer, setPointer] = useState(0)
  // 使用visible避免AnimationQueue中的handleAnimationStateChange的影响
  const [visible, setVisible] = useState(false);

  const {
    children,
    animation = true,
  } = props;

  const handleAnimationcEnd = () => {
    const len = children.length;
    if (!visible && pointer <= 0) {
      setPointer(0);
    } else if (visible && pointer >= len) {
      setPointer(len);
    } else {
      setPointer(prevPointer => {
        if (visible) {
          return prevPointer + 1;
        } else {
          return prevPointer - 1;
        }
      });
    }
  }

  // 为了避免handleAnimationcEnd多次执行第三个分支
  useEffect(() => {
    setVisible(animation);
    handleAnimationcEnd();
  }, [visible, animation]);

  return React.Children.map(children, (child: any, index) => {
    return React.cloneElement(child, {
      onAnimationcEnd: handleAnimationcEnd,
      animation: pointer > index
    })
  })
}

export default AnimationQueueGroup;
