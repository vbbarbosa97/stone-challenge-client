import { LinearProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchCharacterScreen from '../modules/Character/SearchCharacterScreen';

export const CHARACTER_PATH = {
  Main: '/search-character',
};

const CharacterRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={CHARACTER_PATH.Main} component={SearchCharacterScreen} />
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

export default CharacterRoutes;
