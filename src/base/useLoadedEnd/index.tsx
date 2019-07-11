import React, { useEffect } from 'react';
import LoadingBar from '../LoadingBar';

function useLoadedEnd() {
  useEffect(() => {
    LoadingBar.finish();
  }, [])
}

export default useLoadedEnd;
