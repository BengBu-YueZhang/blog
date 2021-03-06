import React, { useState, useEffect } from 'react';
import Switch from '../../base/Switch';
import './index.scss';
import { addClass, removeClass } from '../../util/class';
import { setLocalStorage, getLocalStorage } from '../../util/storage';
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import { navs } from '../../config/navs';
import { withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router'

const prefixClass = 'yy-header';

const Header: React.FC<RouteComponentProps> = (props) => {
  const theme = getLocalStorage('theme')
  const body = document.getElementsByTagName('body')[0];
  const [value, setValue] = useState(theme === 'light' ? false : true);

  const handleSwitchClick = (checked: boolean): void => {
    setValue(checked)
  }

  const handleClickLogo = (): void => {
    const { history } = props;
    history.push('/');
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

  const { location: { pathname } } = props

  if (pathname === '/login') {
    return null;
  } else {
    return (
      <header className={`${prefixClass}`}>
        <h1 className={`${prefixClass}-logo`} onClick={handleClickLogo}>Yue·Blog</h1>
        <div className={`${prefixClass}-right`}>
          <div>
            {
              navs && navs.map((nav, index) => {
                return (
                  <NavLink
                    key={index}
                    exact
                    className={`${prefixClass}-nav-item`}
                    activeClassName={`${prefixClass}-nav-item-active`}
                    to={nav.path}
                  >{nav.name}</NavLink>
                )
              })
            }
          </div>
          <div className={`${prefixClass}-switch`}>
            <Switch
              value={value}
              onChange={handleSwitchClick}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);