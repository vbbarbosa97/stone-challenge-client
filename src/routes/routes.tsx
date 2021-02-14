import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { CustomRoute } from '../shared/components/CustomRoute/CustomRoute';
import { LoginRoute, LOGIN_PATH } from './Login.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path={LOGIN_PATH.Main} isPrivate={false} component={LoginRoute} />
        <CustomRoute exact path="/teste" isPrivate component={LoginRoute} />
      </Switch>
    </BrowserRouter>
  );

  return (
    <Suspense
      fallback={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          <LinearProgress color="primary" />
          <LinearProgress color="secondary" />
        </>
      }>
      {routes}
    </Suspense>
  );
};

export default Routes;