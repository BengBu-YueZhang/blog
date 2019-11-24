import React, { useState, useEffect } from 'react';

function useTitle (
  initTitle: string = ''
) {
  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return {
    title,
    setTitle
  }
}

export default useTitle;
