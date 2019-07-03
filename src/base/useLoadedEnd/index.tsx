import React, { useEffect } from 'react';

function useLoadedEnd() {
  useEffect(() => {
    console.log('结束加载loadingbar')
  }, [])
}

export default useLoadedEnd;
