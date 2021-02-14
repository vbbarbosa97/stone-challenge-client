import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardScreen from '../modules/Dashboard/DashboardScreen';

export const DASHBOARD_PATH = {
  Main: '/dashboard',
};

const DashboardRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={DASHBOARD_PATH.Main} component={DashboardScreen} />;
    </Switch>
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

export default DashboardRoutes;
