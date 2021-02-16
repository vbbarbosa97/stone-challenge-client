import { IconButton } from '@material-ui/core';
import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import marvelLogo from '../../../assets/Logo.svg';
import * as S from './styles';

export interface ILayout {
  headerActive: boolean;
}

const Layout: React.FC<ILayout> = ({ children, headerActive }) => {
  const history = useHistory();

  const NameUserFake = 'Vinicius Batista Barbosa';

  const navigateProfile = () => {
    history.push('/update-profile');
  };

  return (
    <S.MainContainer>
      {headerActive && (
        <S.Header>
          <div>
            <img src={marvelLogo} alt="logo-marvel" loading="lazy" />
            <S.ProfileContainer>
              <strong>Bem-vindo,</strong>
              <S.NameUser onClick={navigateProfile}>{NameUserFake}</S.NameUser>
            </S.ProfileContainer>
          </div>
          <IconButton>
            <FiPower size={24} fontSize="bold" />
          </IconButton>
        </S.Header>
      )}

      {children}
    </S.MainContainer>
  );
};

export default Layout;
