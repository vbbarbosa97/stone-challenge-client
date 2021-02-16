import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthenticationContext } from '../../../context/reducers/auth/authContext';
import Layout from '../Layout';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
  headerActive: boolean;
}

export const CustomRoute = ({ isPrivate = true, headerActive, component: Component, ...rest }: CustomRouteProps) => {
  const { state } = useAuthenticationContext();
  const { token } = state.user;
  const authenticated = token;
  const notAthenticated = !authenticated;
  const openRoute = !isPrivate;

  const privateRoute = () => {
    if (authenticated && isPrivate) {
      return (
        <Layout headerActive={headerActive}>
          <Component />
        </Layout>
      );
    }

    if (authenticated && openRoute) {
      return <Redirect to="/dashboard" />;
    }

    if (notAthenticated && openRoute) {
      return (
        <Layout headerActive={headerActive}>
          <Component />
        </Layout>
      );
    }

    return <Redirect to="/" />;
  };

  return <Route {...rest} render={privateRoute} />;
};
