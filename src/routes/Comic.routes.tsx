import { LinearProgress } from '@material-ui/core';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchComicScreen from '../modules/Comic/SearchComicScreen';

export const COMIC_PATH = {
  Main: '/search-comic',
};

const ComicRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={COMIC_PATH.Main} component={SearchComicScreen} />
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

export default ComicRoutes;
