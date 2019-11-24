import React from 'react';
import './index.scss';
import Animate from '../Animate';
import getZIndex from '../../util/zIndex';
import classnames from 'classnames';

const prefixClass = 'yy-drawer';

const Animation = Animate.Animation

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
  getContainer?: HTMLElement
}

const Drawer: React.FC<IDrawe> = (props) => {
  const {
    mask = true,
    maskClosable = true,
    visible = false,
    width = 256,
    height = 256,
    placement = 'right',
    children,
    closable = true,
    getContainer = document.body
  } = props;

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

  const drawerContentStyle = placement === 'right' || placement === 'left' ?
    {
      width: `${width}px`
    }
    :
    {
      height: `${height}px`
    };

  return (
    <div className={drawerClasses} style={{ zIndex }}>
      <Animation animation={visible}>
        <div className={`${prefixClass}-mask`}></div>
      </Animation>
      <Animation animation={visible}>
        <div style={drawerContentStyle} className={drawerContentClasses}>
          {
            children
          }
        </div>
      </Animation>
    </div>
  )
}

export default Drawer;
