import { Route } from 'react-router-dom';
import LoginScreen from '../modules/Login/LoginScreen';

const LOGIN_PATH = {
  Main: '/',
};

const LoginRoute = () => {
  return <Route path={LOGIN_PATH.Main} component={LoginScreen} />;
};

export { LoginRoute, LOGIN_PATH };
