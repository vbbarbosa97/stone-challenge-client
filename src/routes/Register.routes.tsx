import { Route } from 'react-router-dom';

import RegisterScreen from '../modules/Register/RegisterScreen';

const REGISTER_PATH = {
  Main: '/register',
};

const RegisterRoute = () => {
  return <Route path={REGISTER_PATH.Main} component={RegisterScreen} />;
};

export { RegisterRoute, REGISTER_PATH };
