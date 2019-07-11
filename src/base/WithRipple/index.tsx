import React from 'react';
import Ripple, { IRippleState } from '../Ripple';
import './index.scss';

const prefixClass = 'yy-with-ripple';

// export interface IWithRippleInnerComponent {
//   onMouseDown?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
//   className?: string;
//   children?: React.ReactNode;
//   [key: string]: any;
// }

// export default function withRipple(InnerComponent: typeof React.Component) {

//   return class extends InnerComponent<IWithRippleInnerComponent> {

//     rippleRef!: React.RefObject<IRippleState>;

//     constructor(props: IWithRippleInnerComponent) {
//       super(props);
//       this.rippleRef = React.createRef<IRippleState>(); 
//     }

//     handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
//       if (this.props.onMouseDown) {
//         this.props.onMouseDown(event);
//       }
//       // 添加水波纹
//       (this.rippleRef.current as IRippleState).createdRipple(event);
//     }

//     render () {
//       const { className, children, ...rest } = this.props;

//       return (
//         <InnerComponent
//           {...rest}
//           onMouseDown={this.handleMouseDown}
//           className={`${className} ${prefixClass}`}
//         >
//           <React.Fragment>
//             {
//               children
//             }
//             <Ripple ref={this.rippleRef} />
//           </React.Fragment>
//         </InnerComponent>
//       )
//     }
//   }
// }


export default function withRipple(element: React.ReactElement) {

  // const Element = element;

  // return class extends React.PureComponent {

  //   rippleRef!: React.RefObject<IRippleState>;

  //   constructor(props: any) {
  //     super(props);
  //     this.rippleRef = React.createRef<IRippleState>();
  //   }

  //   handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  //     if (this.props.onMouseDown) {
  //       this.props.onMouseDown(event);
  //     }
  //     // 添加水波纹
  //     (this.rippleRef.current as IRippleState).createdRipple(event);
  //   }

  //   render() {

  //     return React.cloneElement(Element, {
  //       className: `${className} with-ripple`,
  //       onMouseDown: this.handleMouseDown,
  //       children: (
  //         <React.Fragment>
  //           {
  //             children
  //           }
  //           <Ripple ref={this.rippleRef} />
  //         </React.Fragment>
  //       )
  //     })

  //     // const { className, children, ...rest } = this.props;

  //     // return (
  //     //   <InnerComponent
  //     //     {...rest}
  //     //     onMouseDown={this.handleMouseDown}
  //     //     className={`${className} ${prefixClass}`}
  //     //   >
  //     //     <React.Fragment>
  //     //       {
  //     //         children
  //     //       }
  //     //       <Ripple ref={this.rippleRef} />
  //     //     </React.Fragment>
  //     //   </InnerComponent>
  //     // )
  //   }
  // }
}