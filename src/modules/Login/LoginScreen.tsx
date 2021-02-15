import { useHistory } from 'react-router-dom';
import { Login } from './Login';

export const LoginScreen = () => {
  const history = useHistory();

  const navigateToRegister = () => {
    history.push('/register');
  };

  return <Login navigateToRegister={navigateToRegister} />;
};

export default LoginScreen;
