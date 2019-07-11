import React from 'react';
import Ripple, { IRippleState } from '../Ripple';

const prefixClass = 'yy-with-ripple';

export default function withRipple(InnerComponent: typeof React.Component) {

  return class extends InnerComponent<any> {

    rippleRef!: React.RefObject<IRippleState>;

    constructor(props: any) {
      super(props);
      this.rippleRef = React.createRef<IRippleState>(); 
    }

    handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {

      if (this.props.onMouseDown) {
        this.props.onMouseDown(event);
      }
      // 添加水波纹
      (this.rippleRef.current as IRippleState).createdRipple(event);
    }

    render () {
      const { className, children, ...rest } = this.props;

      return (
        <InnerComponent
          {...rest}
          onMouseDown={this.handleMouseDown}
          className={`${className} ${prefixClass}`}
        >
          <React.Fragment>
            {
              children
            }
            <Ripple ref={this.rippleRef} />
          </React.Fragment>
        </InnerComponent>
      )
    }
  }
}