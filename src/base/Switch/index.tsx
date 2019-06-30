import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './index.scss';
import classnames from 'classnames';

const prefixClass = 'yy-switch';

export interface ISwitchProps {
  activeColor?: string;
  inactiveColor?: string;
  activeIcon?: string;
  inactiveIcon?: string;
  value: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<ISwitchProps> = (props) => {
  const [value, setValue] = useState(props.value);
  const switchEl = useRef<HTMLSpanElement>(null);

  const handleSwitchClick = () => {
    const { onChange } = props
    if (onChange) {
      onChange(!value);
    }
    setValue(prevValue => {
      return !prevValue;
    });
  }

  const switchClasses = classnames({
    [`${prefixClass}`]: true,
    [`${prefixClass}-active`]: value,
    [`${prefixClass}-inactive`]: !value
  })

  useLayoutEffect(() => {
    const {activeColor, inactiveColor} = props;
    if (activeColor && value && switchEl && switchEl.current) {
      switchEl.current.style.backgroundColor = activeColor;
    }
    if (inactiveColor && !value && switchEl && switchEl.current) {
      switchEl.current.style.backgroundColor = inactiveColor;
    }
  }, [props.value])

  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  return (
    <span
      ref={switchEl}
      className={switchClasses}
      onClick={handleSwitchClick}
    ></span>
  )
}

Switch.defaultProps = {
  activeColor: '',
  inactiveColor: '',
  activeIcon: '',
  inactiveIcon: '',
  value: false
}

export default Switch;
