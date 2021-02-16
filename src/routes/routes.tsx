import { LinearProgress } from '@material-ui/core';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useAuthenticationContext } from '../context/reducers/auth/authContext';
import { CustomRoute } from '../shared/components/CustomRoute/CustomRoute';
import { getUserLocalStorage } from '../utils/functions';
import CharacterRoutes, { CHARACTER_PATH } from './Character.routes';
import ComicRoutes, { COMIC_PATH } from './Comic.routes';
import { DashboardRoute, DASHBOARD_PATH } from './Dashboard.routes';
import { LoginRoute, LOGIN_PATH } from './Login.routes';
import { RegisterRoute, REGISTER_PATH } from './Register.routes';
import { UpdateRoute, UPDATE_PATH } from './Update.routes';

const Routes = () => {
  const { dispatch, actions } = useAuthenticationContext();

  useEffect(() => {
    const response = getUserLocalStorage();
    if (response) {
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path={LOGIN_PATH.Main} isPrivate={false} headerActive={false} component={LoginRoute} />
        <CustomRoute exact path={REGISTER_PATH.Main} isPrivate={false} headerActive={false} component={RegisterRoute} />
        <CustomRoute exact path={DASHBOARD_PATH.Main} isPrivate headerActive component={DashboardRoute} />
        <CustomRoute exact path={UPDATE_PATH.Main} isPrivate headerActive component={UpdateRoute} />
        <CustomRoute exact path={COMIC_PATH.Main} isPrivate headerActive component={ComicRoutes} />
        <CustomRoute exact path={CHARACTER_PATH.Main} isPrivate headerActive component={CharacterRoutes} />
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
