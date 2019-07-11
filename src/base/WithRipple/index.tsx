import React from 'react';
import Ripple, { IRippleState } from '../Ripple';
import './index.scss';

const prefixClass = 'yy-with-ripple';

export default function withRipple(element: React.ReactElement) {

  const Element = element;

  return class extends React.PureComponent {

    rippleRef!: React.RefObject<IRippleState>;

    constructor(props: any) {
      super(props);
      this.rippleRef = React.createRef<IRippleState>();
    }

    handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      if (Element.props.onMouseDown) {
        Element.props.onMouseDown(event);
      }
      // 添加水波纹
      (this.rippleRef.current as IRippleState).createdRipple(event);
    }

    render() {
      const { className = '' } = Element.props;

      return React.cloneElement(Element, {
        className: `${className} ${prefixClass}`,
        onMouseDown: this.handleMouseDown,
        children: (
          <React.Fragment>
            {
              Element.props.children
            }
            <Ripple ref={this.rippleRef} />
          </React.Fragment>
        )
      })
    }
  }
}