import React, { useEffect } from 'react';
import LoadingBar from '../LoadingBar';

function useLoadedEnd() {
  useEffect(() => {
    LoadingBar.finish();
    console.log('结束加载loadingbar')
  }, [])
}

export default useLoadedEnd;
