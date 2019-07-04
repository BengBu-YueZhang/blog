import React, { useEffect, useState } from 'react';
import './index.scss';

function noop() {}

// function isWindow(target: Element | Window ): boolean {
//   return (<Window>target).pageYOffset !== undefined;
// }

const prefixClass = 'yy-back-top';

export interface IBackTop {
  target?: Element | Window;
  visibilityHeight?: number;
  onClick: () => any;
}

const BackTop: React.FC<IBackTop> = (props) => {
  const [visible, setVisible] = useState(false);
  const { target, visibilityHeight, onClick } = props; 

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  useEffect(() => {
    const onScroll = () => {
      let currentScrollTop = 0;
      if (target !== undefined) {
        if (target instanceof Window) {
          currentScrollTop = target.pageYOffset;
        } else if (target instanceof Element) {
          currentScrollTop = target.scrollTop;
        }
      }
      if (visibilityHeight !== undefined && currentScrollTop >= visibilityHeight) {
        setVisible(true);
      } else if (visibilityHeight !== undefined && currentScrollTop < visibilityHeight) {
        setVisible(false);
      }
    };
    (target as Element | Window).addEventListener('scroll', onScroll);
    return () => {
      (target as Element | Window).removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <React.Fragment>
      {
        visible && (
          <div className={`${prefixClass}`} onClick={handleClick}>
          </div>
        )
      }
    </React.Fragment>
  )
}

BackTop.defaultProps = {
  target: window,
  visibilityHeight: 400,
  onClick: noop
}

export default BackTop;