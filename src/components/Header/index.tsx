import React from 'react';
import './index.scss';

const prefixClass = 'yy-header';

const Header: React.FC = () => {

  return (
    <header className={`${prefixClass}`}>
      <h1 className={`${prefixClass}-logo`}>Nirvana</h1>
      <div></div>
    </header>
  );
}

export default Header;