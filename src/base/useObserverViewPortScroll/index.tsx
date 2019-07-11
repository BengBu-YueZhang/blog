import { useEffect } from 'react';

let isFirstEnter = false;

const defaultConfig = {
  appear: false
}

type observerConfig = {
  appear: boolean
}

function useObserverViewPortScroll<T extends Element>(
  eleRef: React.RefObject<T>,
  onEnter?: () => any,
  onLeave?: () => any,
  config?: observerConfig
) {
  
  let intersectionObserver!: IntersectionObserver;

  config = {...defaultConfig, ...config};

  isFirstEnter = config.appear;

  const handleScroll = () => {
  }

  const observer = () => {
    if (IntersectionObserver) {
      intersectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].intersectionRatio <= 0 && isFirstEnter) {
          onLeave && onLeave();
        }
        if (entries[0].intersectionRatio > 0) {
          if (!isFirstEnter) {
            isFirstEnter = true;
          }
          onEnter && onEnter();
        }
      })
      intersectionObserver.observe(eleRef.current as T);
    } else {

    }
  }

  const unobserver = () => {
    if (IntersectionObserver) {
      intersectionObserver.unobserve(eleRef.current as T);
    } else {
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
