import { Route } from 'react-router-dom';

import UpdateScreen from '../modules/Update/UpdateScreen';

const UPDATE_PATH = {
  Main: '/update-profile',
};

const UpdateRoute = () => {
  return <Route path={UPDATE_PATH.Main} component={UpdateScreen} />;
};

export { UpdateRoute, UPDATE_PATH };
