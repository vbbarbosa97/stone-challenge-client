/* eslint-disable no-lonely-if */
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { AuthAsyncActions } from '../../context/actions/authAsyncAction';
import { IRequestUpdateUser } from '../../models/UpdateUser';
import { Update } from './Update';

export const UpdateScreen = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateRequestAction } = AuthAsyncActions();

  const navigateToDashboard = () => {
    history.push('/dashboard');
  };

  const actionUpdateUser = async (data: IRequestUpdateUser) => {
    try {
      const response = await updateRequestAction(data);
      if (response.success) {
        history.push('/dashboard');
        enqueueSnackbar('Cadastro atualizados com sucesso', { variant: 'success' });
      }
      return response.success;
    } catch (error) {
      if (error.response.status && error.response.status === 403) {
        enqueueSnackbar('Email já está sendo utilizado.', { variant: 'error' });
      } else {
        if (error.response.status && error.response.status === 405) {
          enqueueSnackbar('Senha atual incorreta.', { variant: 'error' });
        } else {
          enqueueSnackbar('Falha ao atualizar cadastro.', { variant: 'error' });
        }
      }

      return false;
    }
  };

  return <Update navigateToDashboard={navigateToDashboard} actionUpdateUser={actionUpdateUser} />;
};

export default UpdateScreen;
