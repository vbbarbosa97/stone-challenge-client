import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { IRequestSession } from '../../models/Session';
import { createSession } from '../../services/session.service';
import { Login } from './Login';

export const LoginScreen = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const navigateToRegister = () => {
    history.push('/register');
  };

  const actionCreateSession = async (data: IRequestSession) => {
    try {
      const response = await createSession(data);
      if (response.success) {
        history.push('/dashboard');
        enqueueSnackbar('Login efetuado com sucesso', { variant: 'success' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao efetura login.', { variant: 'error' });
      return false;
    }
  };

  return <Login navigateToRegister={navigateToRegister} actionCreateSession={actionCreateSession} />;
};

export default LoginScreen;
