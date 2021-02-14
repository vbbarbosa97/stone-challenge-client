import { IconButton } from '@material-ui/core';
import React from 'react';
import { FiPower } from 'react-icons/fi';
import marvelLogo from '../../../assets/Logo.svg';
import * as S from './styles';

export interface ILayout {
  headerActive: boolean;
}

const Layout: React.FC<ILayout> = ({ children, headerActive }) => {
  const NameUserFake = 'Vinicius Batista Barbosa';

  return (
    <S.Container>
      {headerActive && (
        <S.Header>
          <div>
            <img src={marvelLogo} alt="logo-marvel" loading="lazy" />
            <S.ProfileContainer>
              <strong>Bem-vindo,</strong>
              <S.NameUser>{NameUserFake}</S.NameUser>
            </S.ProfileContainer>
          </div>
          <IconButton>
            <FiPower size={24} fontSize="bold" />
          </IconButton>
        </S.Header>
      )}

      {children}
    </S.Container>
  );
};

export default Layout;
