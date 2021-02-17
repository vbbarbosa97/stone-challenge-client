import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IRequestCreateUser } from '../../models/CreateUser';
import { createUser } from '../../services/user.service';
import { Register } from './Register';

export const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const actionCreateUser = async (data: IRequestCreateUser) => {
    try {
      setLoading(true);
      const response = await createUser(data);
      setLoading(false);
      if (response.success) {
        history.push('/');
        enqueueSnackbar('Cadastro realizado com sucesso', { variant: 'success' });
      }
      return response.success;
    } catch (error) {
      setLoading(false);
      if (error.response.status && error.response.status === 403) {
        enqueueSnackbar('Email já está sendo utilizado.', { variant: 'error' });
      } else {
        enqueueSnackbar('Falha ao criar cadastro.', { variant: 'error' });
      }
      return false;
    }
  };

  return <Register loading={loading} actionCreateUser={actionCreateUser} />;
};

export default RegisterScreen;
