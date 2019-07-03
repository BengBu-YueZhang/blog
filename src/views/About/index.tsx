import React from 'react';
import useLoadedEnd from '../../base/useLoadedEnd'

const About: React.FC = () => {

  useLoadedEnd();

  return (
    <div>About</div>
  )
}

export default About;
