import React from 'react';

export default function withRipple<P>(Component: React.ComponentType<P>, rippleColor: string) {
  return class extends React.Component<P> {
    rippleRef!: any;

    constructor (props: P) {
      super(props)
      this.rippleRef = React.createRef<any>()
    }
  }
}
