import React, { useRef, useState, useMemo } from 'react';
import useObserverBorderScroll from '../../base/useObserverBorderScroll';
import './index.scss';

enum Position {
  BOTTOM = 'bottom',
  TOP = 'top'
}

export interface IAdsorption {
  position?: Position
}

const Adsorption: React.FC<IAdsorption> = (props) => {

  const [isFixed, setIsFixed] = useState(false)

  const ele = useRef<HTMLDivElement>(null);
  const innerEle = useRef<HTMLDivElement>(null);

  const styles = useMemo(() => {
    let left = 0;
    if (innerEle.current) {
      left = (innerEle.current as HTMLDivElement).getBoundingClientRect().left;
    }
    if (isFixed) {
      return {
        position: 'fixed',
        left,
        top: 0,
        zIndex: 99
      }
    } else {
      return {}
    }
  }, [isFixed])

  const onEnterTop = () => {
    setIsFixed(true);
  }

  const onLeaveTop = () => {
    setIsFixed(false);
  }

  useObserverBorderScroll(ele, onEnterTop, onLeaveTop)

  return (
    <div ref={ele}>
      <div ref={innerEle}>
        {
          React.Children.map(props.children, (child: any) => {
            return React.cloneElement(child, {
              style: {
                ...styles
              }
            })
          })
        }
      </div>
    </div>
  )
}

Adsorption.defaultProps = {
  position: Position.TOP
}

export default Adsorption;
