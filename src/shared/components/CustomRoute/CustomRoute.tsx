import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Layout from '../Layout';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
  headerActive: boolean;
}

export const CustomRoute = ({ isPrivate = true, headerActive, component: Component, ...rest }: CustomRouteProps) => {
  const authenticated = false;

  const privateRoute = () => {
    if (isPrivate) {
      if (authenticated) {
        return (
          <Layout headerActive={headerActive}>
            <Component />
          </Layout>
        );
      }
      return <Redirect to="/" />;
    }
    return (
      <Layout headerActive={headerActive}>
        <Component />
      </Layout>
    );
  };

  return <Route {...rest} render={privateRoute} />;
};
