import { LinearProgress } from '@material-ui/core';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchComicScreen from '../modules/Comic/SearchComicScreen';
import InfoComicScreen from '../modules/InfoComic/InfoComicScreen';

export const COMIC_PATH = {
  Main: '/search-comic',
  Info: '/comic/:comicId/characters',
};

const ComicRoutes = () => {
  const routes = (
    <Switch>
      <Route exact path={COMIC_PATH.Main} component={SearchComicScreen} />
      <Route exact path={COMIC_PATH.Info} component={InfoComicScreen} />
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
