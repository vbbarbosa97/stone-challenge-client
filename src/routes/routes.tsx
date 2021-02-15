import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { CustomRoute } from '../shared/components/CustomRoute/CustomRoute';
import DashboardRoutes, { DASHBOARD_PATH } from './Dashboard.routes';
import { LoginRoute, LOGIN_PATH } from './Login.routes';
import { RegisterRoute, REGISTER_PATH } from './Register.routes';
import { UpdateRoute, UPDATE_PATH } from './Update.routes';

const Routes = () => {
  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path={LOGIN_PATH.Main} isPrivate={false} headerActive={false} component={LoginRoute} />
        <CustomRoute exact path={REGISTER_PATH.Main} isPrivate={false} headerActive={false} component={RegisterRoute} />
        <CustomRoute exact path={DASHBOARD_PATH.Main} isPrivate={false} headerActive component={DashboardRoutes} />
        <CustomRoute exact path={UPDATE_PATH.Main} isPrivate={false} headerActive component={UpdateRoute} />
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
