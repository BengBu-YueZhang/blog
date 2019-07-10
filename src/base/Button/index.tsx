import React, { useRef } from 'react';
import './index.scss';
import Ripple, { IRipple } from '../Ripple';

const prefixClass = 'yy-button';

function noop () {};

export enum ButtonType {
  PRIMARY = 'primary'
}

export interface IButton {
  disabled?: false;
  type?: 'primary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button: React.FC<IButton> = (props) => {
  const { children, onClick } = props;
  const rippleRef = useRef<any>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (rippleRef && rippleRef.current !== null) {
      rippleRef.current.createdRipple(event);
    }
  }

  return (
    <button className={`${prefixClass}`} onClick={handleClick} onMouseDown={handleMouseDown}>
      <span className={`${prefixClass}-text`}>{ children }</span>
      <Ripple ref={rippleRef}/>
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: ButtonType.PRIMARY,
  onClick: noop
}

export default Button;