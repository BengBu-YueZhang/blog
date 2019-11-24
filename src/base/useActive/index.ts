import React, { useEffect, useState, useRef } from 'react'

const defaultEvents = [
  'mousemove',
  'mousedown',
  'resize',
  'keydown',
  'scroll'
]

function useActive (
  delay: number = 3000,
  initState: boolean = true,
  events: string[] = defaultEvents
) {
  const [state, setState] = useState(initState);
  const timer = useRef(0);
  const realState = useRef(state);

  realState.current = state

  const handleEvents = () => {
    if (!realState.current) setState(true)
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState(false);
    }, delay);
  };

  const handleVisibilitychange = () => {
    setState(!document.hidden)
  };

  const observer = () => {
    for (let i = 0; i < events.length; i++) {
      window.addEventListener(events[i], handleEvents);
    }
    window.addEventListener('visibilitychange', handleVisibilitychange);
  };

  const unobserver = () => {
    for (let i = 0; i < events.length; i++) {
      window.removeEventListener(events[i], handleEvents);
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