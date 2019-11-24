import React, { useState, useEffect } from 'react';

function useFavicon (
  href: string = '%PUBLIC_URL%/popsicle.ico'
) {
  const [ICO, setICO] = useState(href);

  useEffect(() => {
    const oldIco = document.getElementById('ico');
    const newIco = document.createElement('link');
    newIco.setAttribute('id', 'ico');
    newIco.setAttribute('rel', 'shortcut icon');
    newIco.setAttribute('href', ICO);
    document.head.removeChild(oldIco as HTMLElement);
    document.head.appendChild(newIco);
  }, [ICO]);

  return {
    setICO
  }
}

export default useFavicon;
