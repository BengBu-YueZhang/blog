import React, { useRef } from 'react';
import './index.scss';
import Ripple, { IRippleState } from '../Ripple';
import classnames from 'classnames';

const prefixClass = 'yy-button';

function noop () {};

export enum ButtonType {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  DANGER = 'danger'
}

export interface IButton {
  disabled?: false;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  full?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const {
    children,
    onClick = noop,
    full = false,
    type = ButtonType.PRIMARY
  } = props;

  const rippleRef = useRef<IRippleState>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(event);
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (rippleRef && rippleRef.current !== null) {
      (rippleRef.current as IRippleState).createdRipple(event);
    }
  }

  const buttonClasses = classnames({
    [`${prefixClass}`]: true,
    [`${prefixClass}-full`]: full,
    [`${prefixClass}-primary`]: type === ButtonType.PRIMARY,
    [`${prefixClass}-default`]: type === ButtonType.DEFAULT,
    [`${prefixClass}-danger`]: type === ButtonType.DANGER
  })

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <span className={`${prefixClass}-text`}>{ children }</span>
      <Ripple ref={rippleRef}/>
    </button>
  )
}

export default Button;
