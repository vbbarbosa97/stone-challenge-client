import React, { ComponentType } from 'react';

import { Route, RouteProps, Redirect } from 'react-router-dom';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const CustomRoute = ({ isPrivate = true, component: Component, ...rest }: CustomRouteProps) => {
  const authenticated = false;

  const privateRoute = () => {
    if (isPrivate) {
      if (authenticated) {
        return <h1>teste</h1>;
      }
      return <Redirect to="/" />;
    }
    return <Component />;
  };

  return <Route {...rest} render={privateRoute} />;
};
