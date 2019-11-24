import React, { useEffect } from 'react';
import useActive from '../../base/useActive';
import useTitle from '../../base/useTitle';
import useIco from '../useIco';

function useChangeTitle () {
  const { state } = useActive();
  const { setTitle } = useTitle(document.getElementsByTagName('title')[0].innerHTML);
  const { setICO }  = useIco('popsicle.ico')

  useEffect(() => {
    if (state) {
      setTitle('张越的部落格');
      setICO('popsicle.ico');
    } else {
      setTitle('◔ ‸◔？');
      setICO('sushi.ico');
    }
  }, [state])
}

export default useChangeTitle;
