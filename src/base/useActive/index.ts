import React, { useEffect, useState, useRef } from 'react'

const defaultEvents = [
  'mousemove',
  'mousedown',
  'resize',
  'keydown',
  'touchstart',
  'wheel',
  'scroll'
]

function useActive (
  delay: number = 30000,
  initState: boolean = false,
  events: string[] = defaultEvents
) {
  const [state, setState] = useState(initState);
  const timer = useRef(0);

  const handleEvents = () => {
    if (!state) {
      setState(true)
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState(false);
    }, delay)
  };

  const handleVisibilitychange = () => {
    setState(!document.hidden)
  };

  const observer = () => {
    for (let i = 0; i < events.length; i++) {
      if (events[i] in window) {
        window.addEventListener(events[i], handleEvents);
      }
    }
    window.addEventListener('visibilitychange', handleVisibilitychange);
  };

  const unobserver = () => {
    for (let i = 0; i < events.length; i++) {
      if (events[i] in window) {
        window.removeEventListener(events[i], handleEvents);
      }
    }
    window.removeEventListener('visibilitychange', handleVisibilitychange);
  };

  useEffect(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState(false);
    }, delay);
    observer();
    return () => {
      unobserver();
    }
  }, []);

  return {
    state
  };
}

export default useActive;