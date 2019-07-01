import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface IPrivateRoute {
  component: React.ComponentType<any>;
  path: string;
  [key: string]: any;
}

const PrivateRoute: React.FC<IPrivateRoute> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Component {...props}/>
        )
      }}
    />
  )
}

export default PrivateRoute;
