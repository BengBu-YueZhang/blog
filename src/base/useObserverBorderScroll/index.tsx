import React, { useEffect } from 'react';

function useObserverBorderScroll<T extends Element>(
  eleRef: React.RefObject<T>,
  onScroll?: (distance: number) => any | undefined,
  onEnterTop?: () => any | undefined,
  onLeaveTop?: () => any | undefined,
  onEnterBottom?: () => any | undefined,
  onLeaveBottom?: () => any | undefined
) {

  const handleScroll = () => {
    const targetTop = (eleRef.current as T).getBoundingClientRect().top;
    const targetHeigth = (eleRef.current as T).getBoundingClientRect().height;
    const viewPortHeight = window.innerHeight;
    onScroll && onScroll(window.pageYOffset);
    if (targetTop <= 0) {
      onEnterTop && onEnterTop();
    }
    if (targetTop > 0) {
      onLeaveTop && onLeaveTop();
    }
    if (targetTop <= viewPortHeight - targetHeigth) {
      onEnterBottom && onEnterBottom();
    }
    if (targetTop > viewPortHeight - targetHeigth) {
      onLeaveBottom && onLeaveBottom();
    }
  }

  const observer = () => {
    window.addEventListener('scroll', handleScroll);
  }

  const unobserver = () => {
    window.removeEventListener('scroll', handleScroll);
  }

  useEffect(() => {
    observer();
    return () => {
      unobserver();
    }
  })
}

export default useObserverBorderScroll;
