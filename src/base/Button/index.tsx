import React, { useRef, useMemo } from 'react';
import './index.scss';
import Ripple, { IRippleState } from '../Ripple';

const prefixClass = 'yy-button';

function noop () {};

export enum ButtonType {
  PRIMARY = 'primary'
}

export interface IButton {
  disabled?: false;
  type?: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  full?: boolean;
}

const Button: React.FC<IButton> = (props) => {
  const { children, onClick, full } = props;
  const rippleRef = useRef<IRippleState>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (rippleRef && rippleRef.current !== null) {
      (rippleRef.current as IRippleState).createdRipple(event);
    }
  }

  const classnames = useMemo(() => {
    if (full) {
      return `${prefixClass} ${prefixClass}-full`;
    } else {
      return `${prefixClass}`;
    }
  }, [full])

  return (
    <button
      className={classnames}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <span className={`${prefixClass}-text`}>{ children }</span>
      <Ripple ref={rippleRef}/>
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: ButtonType.PRIMARY,
  onClick: noop,
  full: false
}

export default Button;