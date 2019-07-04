import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoadingBar from '../../base/LoadingBar';

export interface IPrivateRoute {
  component: React.ComponentType<any>;
  path: string;
  auth?: boolean;
  [key: string]: any;
}

const PrivateRoute: React.FC<IPrivateRoute> = (props) => {
  const { component: Component, auth, ...rest } = props;
  const { location: { pathname } } = props;
  if (window.location.pathname !== pathname) {
    LoadingBar.start();
  }
  if (auth) {
  }
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
