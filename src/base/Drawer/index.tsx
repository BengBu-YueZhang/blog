import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Animate from '../Animate';
import getZIndex from '../../util/zIndex';
import classnames from 'classnames';
import './index.scss';

const prefixClass = 'yy-drawer';
const Animation = Animate.Animation;
const maskTime = 200;
const contentTime = 240;

export interface IDrawe {
  mask?: boolean
  maskClosable?: boolean
  visible?: boolean
  width?: number
  height?: number
  placement?: 'top' | 'right' | 'bottom' | 'left'
  onClose?: () => void
  children?: React.ReactChild
  closable?: boolean
  getContainer?: HTMLElement | null
}

const Drawer: React.FC<IDrawe> = (props) => {
  const {
    mask = true,
    maskClosable = true,
    visible = false,
    width = 300,
    height = 300,
    placement = 'right',
    children,
    closable = true,
    getContainer = document.body,
    onClose
  } = props;

  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    setShow(visible);
  }, [visible])

  const zIndex = getZIndex();

  const drawerClasses = classnames({
    [`${prefixClass}`]: true,
    [`${prefixClass}-open`]: visible,
    [`${prefixClass}-close`]: !visible,
    [`${prefixClass}-top`]: placement === 'top',
    [`${prefixClass}-right`]: placement === 'right',
    [`${prefixClass}-bottom`]: placement === 'bottom',
    [`${prefixClass}-left`]: placement === 'left'
  })

  const drawerContentClasses = classnames({
    [`${prefixClass}-content`]: true
  })

  const drawerContentStyle = 
    placement === 'right' || placement === 'left' ? {
      width: `${width}px`
    } : {
      height: `${height}px`
    };
  
  const drawerContentAnimationToStyle = 
    placement === 'right' ? {
      transform: `translateX(0)`
    } : placement === 'left' ? {
      transform: `translateX(0)`
    } : placement === 'bottom' ? {
      transform: `translateY(0)`
    } : {
      transform: `translateY(0)`
    }
  
  const drawerContentAnimationFromStyle = 
    placement === 'right' ? {
      transform: `translateX(100%)`,
      opacity: 1
    } : placement === 'left' ? {
      transform: `translateX(-100%)`,
      opacity: 1
    } : placement === 'bottom' ? {
      transform: `translateY(100%)`,
      opacity: 1
    } : {
      transform: `translateY(-100%)`,
      opacity: 1
    }

  const handleMaskClick = () => {
    if (maskClosable) {
      setShow(false);
      setTimeout(() => {
        onClose && onClose();
      }, contentTime);
    }
  }

  const node = (
    <div className={drawerClasses} style={{ zIndex }}>
      {
        mask && <Animation
          duration={maskTime}
          animation={show}
        >
          <div className={`${prefixClass}-mask`} onClick={handleMaskClick}></div>
        </Animation>
      }
      <Animation
        duration={contentTime}
        animation={show}
        to={drawerContentAnimationToStyle}
        from={drawerContentAnimationFromStyle}
      >
        <div style={drawerContentStyle} className={drawerContentClasses}>
          {
            children
          }
        </div>
      </Animation>
    </div>
  )

  if (!getContainer) {
    return node
  }

  return ReactDOM.createPortal(
    node,
    getContainer
  );
}

export default Drawer;
