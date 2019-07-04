import React, { useEffect, useState } from 'react';
import './index.scss';

function noop() {}

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
    const onScroll = (event: Event) => {
      console.log(event.scrollTop)
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
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