import { useEffect } from 'react';

function useObserverScroll(element: HTMLElement) {

  let intersectionObserver!: IntersectionObserver;

  const observer = () => {
    if (IntersectionObserver) {
      intersectionObserver = new IntersectionObserver(function (entries) {
        console.log(entries[0].intersectionRatio);
      })
      intersectionObserver.observe(element);
    } else {
    }
  }

  const unobserver = () => {
    if (IntersectionObserver) {
      intersectionObserver.unobserve(element);
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

export default useObserverScroll;
