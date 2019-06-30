import React, { useState, useEffect } from 'react';
import Switch from '../../base/Switch';
import './index.scss';
import { addClass, removeClass } from '../../util/class';
import { setLocalStorage, getLocalStorage } from '../../util/storage';

const prefixClass = 'yy-header';

const Header: React.FC = () => {
  const theme = getLocalStorage('theme')
  const body = document.getElementsByTagName('body')[0];
  const [value, setValue] = useState(theme === 'light' ? false : true);

  const handleSwitchClick = (checked: boolean): void => {
    setValue(checked)
  }

  const handleSwitchToggle = (): void => {
    if (!value) {
      removeClass(body, 'dark');
      addClass(body, 'light');
      setLocalStorage('theme', 'light');
    } else if (value) {
      removeClass(body, 'light');
      addClass(body, 'dark');
      setLocalStorage('theme', 'dark');
    }
  }

  useEffect(() => {
    handleSwitchToggle()
  }, [value])

  return (
    <header className={`${prefixClass}`}>
      <h1 className={`${prefixClass}-logo`}>Nirvana</h1>
      <div className={`${prefixClass}-switch`}>
        <Switch
          value={value}
          onChange={handleSwitchClick}
        />
      </div>
    </header>
  );
}

export default Header;