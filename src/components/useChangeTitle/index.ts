import React, { useEffect } from 'react';
import useActive from '../../base/useActive';
import useTitle from '../../base/useTitle';

function useChangeTitle () {
  const initTitle = document.getElementsByTagName('title')[0].innerHTML;
  const { state } = useActive();
  const { setTitle } = useTitle(initTitle);

  useEffect(() => {
    if (state) {
      setTitle('张越的部落格')
    } else {
      setTitle('◔ ‸◔？')
    }
  }, [state])
}

export default useChangeTitle;
