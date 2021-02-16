import { IconButton } from '@material-ui/core';
import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import marvelLogo from '../../../assets/Logo.svg';
import { AuthAsyncActions } from '../../../context/actions/authAsyncAction';
import { useAuthenticationContext } from '../../../context/reducers/auth/authContext';
import * as S from './styles';

export interface ILayout {
  headerActive: boolean;
}

const Layout: React.FC<ILayout> = ({ children, headerActive }) => {
  const history = useHistory();
  const { state } = useAuthenticationContext();
  const { logoutRequestAction } = AuthAsyncActions();

  const NameUser = state.user.userName;

  const navigateProfile = () => {
    history.push('/update-profile');
  };

  const actionLogout = () => {
    logoutRequestAction();
  };

  return (
    <S.MainContainer>
      {headerActive && (
        <S.Header>
          <div>
            <img src={marvelLogo} alt="logo-marvel" loading="lazy" />
            <S.ProfileContainer>
              <strong>Bem-vindo,</strong>
              <S.NameUser onClick={navigateProfile}>{NameUser}</S.NameUser>
            </S.ProfileContainer>
          </div>
          <IconButton onClick={actionLogout}>
            <FiPower size={24} fontSize="bold" />
          </IconButton>
        </S.Header>
      )}

      {children}
    </S.MainContainer>
  );
};

export default Layout;
