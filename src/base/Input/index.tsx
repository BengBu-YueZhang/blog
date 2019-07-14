import React, { useEffect, useState, useMemo } from 'react';
import './index.scss';

const prefixClass = 'yy-input';

export interface IInput {
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => any;
  errorText?: string;
  icon?: string;
  full?: boolean;
  disabled?: boolean;
  type?: string;
}

const Input: React.FC<IInput> = (props) => {

  const { disabled, icon, label, errorText, onChange, placeholder, full, type } = props;

  const [ focus, setFocus ] = useState(false);
  const [ content, setContent ] = useState('');

  const handleBlur = () => {
    setFocus(false);
  }

  const handleFocus = () => {
    setFocus(true);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
    onChange && onChange(event.target.value)
  }

  const inputClassName = useMemo(() => {
    let classnames = `${prefixClass}`;
    if (icon) {
      classnames += ` ${prefixClass}-icon-wrap`;
    }
    if (label) {
      classnames += ` ${prefixClass}-label-wrap`;
    }
    if (full) {
      classnames += ` ${prefixClass}-full-wrap`;
    }
    if (errorText) {
      classnames += ` ${prefixClass}-error-text-wrap`;
    }
    return classnames;
  }, [icon, label, full, errorText])

  const labelClassName = useMemo(() => {
    let classnames = `${prefixClass}-label`;
    if (!focus) {
      classnames += ` ${prefixClass}-label-blur`;
    }
    if (focus) {
      classnames += ` ${prefixClass}-label-focus`;
    }
    if (errorText) {
      classnames += ` ${prefixClass}-label-error`;
    }
    if (content) {
      classnames += ` ${prefixClass}-label-exist-content`
    }
    return classnames;
  }, [focus, errorText]);

  const textFieldClassName = useMemo(() => {
    let classnames = `${prefixClass}-text-field`;
    if (disabled) {
      classnames += ` ${prefixClass}-text-field-disabled`;
    }
    return classnames;
  }, [disabled, full])

  const textFieldLineClassName = useMemo(() => {
    let classnames = `${prefixClass}-text-field-line`;
    if (focus) {
      classnames += ` ${prefixClass}-text-field-line-focus`;
    }
    if (!focus) {
      classnames += ` ${prefixClass}-text-field-line-blur`;
    }
    return classnames;
  }, [focus])

  return (
    <div className={inputClassName}>
      {
        icon && (
          <div className={`${prefixClass}-icon`}>
            <span className={`${prefixClass}-icon-font iconfont ${icon}`}/>
          </div>
        )
      }
      <div className={`${prefixClass}-text-field-wrap`}>
        {
          label && (
            <div className={labelClassName}>{ label }</div>
          )
        }
        <input
          type={type}
          disabled={disabled}
          className={textFieldClassName}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <div className={textFieldLineClassName}/>
      </div>
      {
        errorText && (
          <div className={`${prefixClass}-error-text`}>errorText</div>
        )
      }
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
  disabled: false,
  type: 'text'
}

export default Input;
