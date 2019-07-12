import React, { useRef } from 'react';
import useObserverBorderScroll from '../../base/useObserverBorderScroll';

enum Position {
  BOTTOM = 'bottom',
  TOP = 'top'
}

export interface IAdsorption {
  position?: Position
}

const Adsorption: React.FC<IAdsorption> = (props) => {

  const ele = useRef<HTMLDivElement>(null);

  return (
    <div ref={ele}>
      {
        React.Children.map(props.children, (child: any) => {
          return React.cloneElement(child, {
          })
        })
      }
    </div>
  )
}

Adsorption.defaultProps = {
  position: Position.TOP
}

export default Adsorption;