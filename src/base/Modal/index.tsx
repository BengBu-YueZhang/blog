import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Animate from '../Animate';
import Button from '../Button';
import getZIndex from '../../util/zIndex';
import './index.scss';

const Animation = Animate.Animation;
const prefixClass = 'yy-modal';

export interface IModal {
  visible?: boolean
  okText?: string
  cancelText?: string
  mask?: boolean
  maskClosable?: boolean
  onClose?: () => void
  onOpen?: () => void
  onOk?: () => void
  onCancel?: () => void
  width?: number
  title?: string
  footer?: null | React.ReactNode[]
  children?: React.ReactNode
  getContainer?: null | HTMLElement
}

function noop () {}

const Modal: React.FC<IModal> = (props) => {
  
  const {
    visible = false,
    okText = '确定',
    cancelText = '取消',
    mask = true,
    maskClosable = true,
    onClose = noop,
    onOpen = noop,
    onOk = noop,
    onCancel = noop,
    width = 520,
    title = '',
    footer = [],
    children,
    getContainer = document.body
  } = props;

  const zIndex = getZIndex()

  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    setShow(visible);
  }, [visible]);

  const node = (
    <Animation animation={show}>
      <div className={`${prefixClass}`} style={{ zIndex }}>
        <div className={`${prefixClass}-mask`}></div>
        <div className={`${prefixClass}-content`}>
          { 
            title && <div className={`${prefixClass}-content-title`}>
            </div>
          }
          <div className={`${prefixClass}-content-content`}>
          </div>
          <div className={`${prefixClass}-content-footer`}>
          </div>
        </div>
      </div>
    </Animation>
  )

  if (!getContainer) {
    return node
  }

  return ReactDOM.createPortal(
    node,
    getContainer
  );
}

export default Modal
