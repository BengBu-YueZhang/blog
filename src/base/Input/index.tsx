import React, { useEffect, useState, useMemo } from 'react';

const prefixClass = 'yy-input';
export interface IInput {
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => any;
  errorText?: string;
  icon?: string;
  full?: boolean;
  disabled?: boolean;
}

const Input: React.FC<IInput> = (props) => {

  const { disabled, icon, label, errorText, onChange, placeholder, full } = props;

  const [ focus, setFocus ] = useState(false);

  const handleBlur = () => {
    setFocus(false);
  }

  const handleFocus = () => {
    setFocus(true);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value)
  }

  const labelClassName = useMemo(() => {
    let classnames = `${prefixClass}-label`;
    if (focus) {
      classnames += ` ${prefixClass}-label-focus`;
    }
    if (errorText) {
      classnames += ` ${prefixClass}-label-error`;
    }
    return classnames;
  }, [focus, errorText]);

  const inputClassName = useMemo(() => {
    let classnames = `${prefixClass}-input`;
    if (disabled) {
      classnames += `${prefixClass}-input-disabled`;
    }
    if (full) {
      classnames += `${prefixClass}-input-full`;
    }
    return classnames;
  }, [disabled, full])

  return (
    <div className={`${prefixClass}`}>
      {
        icon && (
          <div className={`${prefixClass}-icon`}>
            <span className={`${prefixClass}-icon-font iconfont ${icon}`}/>
          </div>
        )
      }
      {
        label && (
          <div className={labelClassName}>{ label }</div>
        )
      }
      <div>
        <input
          className={inputClassName}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}/>
        <div/>
        {
          errorText && (
            <div className={`${prefixClass}-error-text`}>errorText</div>
          )
        }
      </div>
    </div>
  )
}

Input.defaultProps = {
  placeholder: '',
  label: '',
  onChange: (value) => {},
  errorText: '',
  icon: '',
  full: false,
  disabled: false
}

export default Input;
