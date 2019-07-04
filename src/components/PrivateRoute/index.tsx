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
  console.log('开始')
  LoadingBar.start();
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
