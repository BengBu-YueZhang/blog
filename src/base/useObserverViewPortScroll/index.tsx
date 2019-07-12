import React, { useEffect } from 'react';

let isCallOnEnter = false;
let isCallOnLeave = false;
let isFirstCall = false;

function useObserverViewPortScroll<T extends Element>(
  eleRef: React.RefObject<T>,
  onEnter?: () => any,
  onLeave?: () => any
) {
  
  let intersectionObserver!: IntersectionObserver;

  const handleScroll = () => {
    const targetTop = (eleRef.current as T).getBoundingClientRect().top;
    const viewPortHeight = window.innerHeight;
    const targetHeigth = (eleRef.current as T).getBoundingClientRect().height;
    if (targetTop < viewPortHeight && targetTop > -targetHeigth) {
      if (!isFirstCall || (isCallOnLeave && !isCallOnEnter)) {
        onEnter && onEnter();
        isCallOnEnter = true;
        isCallOnLeave = false;
      }
    } else {
      if (!isFirstCall || (isCallOnEnter && !isCallOnLeave)) {
        onLeave && onLeave();
        isCallOnLeave = true;
        isCallOnEnter = false;
      }
    }
    isFirstCall = true;
  }

  const observer = () => {
    if (IntersectionObserver) {
      intersectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].intersectionRatio <= 0) {
          onLeave && onLeave();
        }
        if (entries[0].intersectionRatio > 0) {
          onEnter && onEnter();
        }
      })
      intersectionObserver.observe(eleRef.current as T);
    } else {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }
  }

  const unobserver = () => {
    if (IntersectionObserver) {
      intersectionObserver.unobserve(eleRef.current as T);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }

  useEffect(() => {
    observer();
    return () => {
      unobserver();
    }
  }, [])
}

export default useObserverViewPortScroll;
