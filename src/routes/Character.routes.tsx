import { LinearProgress } from '@material-ui/core';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchCharacterScreen from '../modules/Character/SearchCharacterScreen';
import InfoCharacterScreen from '../modules/InfoCharacter/InfoCharacterScreen';

export const CHARACTER_PATH = {
  Main: '/search-character',
  Info: '/character/:characterId/comics',
};

const CharacterRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={CHARACTER_PATH.Main} component={SearchCharacterScreen} />
      <Route exact path={CHARACTER_PATH.Info} component={InfoCharacterScreen} />
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
