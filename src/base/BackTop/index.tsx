import React, { useEffect, useState } from 'react';
import './index.scss';
import Animate from '../Animate';

function noop() {}

const toStyle = {
  transform: `translateX(0)`
}

const fromStyle = {
  transform: `translateY(100%)`
}

const prefixClass = 'yy-back-top';

const Animation = Animate.Animation;

export interface IBackTop {
  target?: HTMLElement | Window;
  visibilityHeight?: number;
  onClick?: () => void;
}

const BackTop: React.FC<IBackTop> = (props) => {
  const [visible, setVisible] = useState(false);
  const { target, visibilityHeight, onClick } = props;

  const backTopStyles = {
  }

  const getScrollTop = (): number => {
    let currentScrollTop = 0;
    if (target !== undefined) {
      if (target instanceof Window) {
        currentScrollTop = target.pageYOffset;
      } else if (target instanceof HTMLElement) {
        currentScrollTop = target.scrollTop;
      }
    }
    return currentScrollTop;
  }

  const onScroll = () => {
    const currentScrollTop = getScrollTop();
    if (visibilityHeight !== undefined) {
      if (currentScrollTop >= visibilityHeight) {
        setVisible(true);
      } else if (currentScrollTop < visibilityHeight) {
        setVisible(false);
      }
    }
  };

  const scrollSmoothTo = function (position: number) {
    let currentScrollTop = getScrollTop();
    const step = () => {
      const distance = position - currentScrollTop;
      currentScrollTop = currentScrollTop + distance / 5;
      if (Math.abs(distance) < 1) {
        (target as HTMLElement | Window).scrollTo(0, position);
      } else {
        (target as HTMLElement | Window).scrollTo(0, currentScrollTop);
        requestAnimationFrame(step);
      }
    };
    step();
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    scrollSmoothTo(0);
  }

  useEffect(() => {
    (target as HTMLElement | Window).addEventListener('scroll', onScroll);
    return () => {
      (target as HTMLElement | Window).removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <Animation animation={visible} duration={150} to={toStyle} from={fromStyle}>
      <div className={`${prefixClass}`} style={backTopStyles} onClick={handleClick}>
        <span></span>
      </div>
    </Animation>
  )
}

BackTop.defaultProps = {
  target: window,
  visibilityHeight: 400,
  onClick: noop
}

export default BackTop;