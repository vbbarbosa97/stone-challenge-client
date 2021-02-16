import { IRequestSession } from '../../models/Session';
import { createSession } from '../../services/session.service';
import { removeUserLocalStorage, saveUserLocalStorage } from '../../utils/functions';
import { useAuthenticationContext } from '../reducers/auth/authContext';

export function AuthAsyncActions() {
  const { dispatch, actions } = useAuthenticationContext();

  async function loginRequestAction(data: IRequestSession) {
    try {
      const response = await createSession(data);
      saveUserLocalStorage(response.data);
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });
      return response;
    } catch (error) {
      dispatch({ type: actions.LOGIN_FAILURE });
      throw error;
    }
  }

  const logoutRequestAction = async () => {
    removeUserLocalStorage();
    dispatch({ type: actions.LOGOUT });
  };

  return { loginRequestAction, logoutRequestAction };
}
