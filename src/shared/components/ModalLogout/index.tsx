import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { Colors } from '../../styles/colors';
import * as S from './styles';

interface IModalLogout {
  openModal: boolean;
  handleModal: (openModal: boolean) => void;
  actionButtonConfirm: () => void;
}

export const ModalLogout = ({ openModal, handleModal, actionButtonConfirm }: IModalLogout) => {
  const closeModal = () => handleModal(false);

  return (
    <S.Modal open={openModal}>
      <S.ContentModal>
        <S.DivIcon>
          <IoMdExit size={60} color={Colors.strongRed} />
        </S.DivIcon>
        <S.Title>Sair</S.Title>
        <S.Subtitle>Deseja realmente sair?</S.Subtitle>
      </S.ContentModal>
      <S.CustomGridContainer container>
        <S.CustomGridItem item xs={6}>
          <S.CustomButton colorname={Colors.gray3} onClick={closeModal} fullWidth>
            Cancelar
          </S.CustomButton>
        </S.CustomGridItem>
        <S.CustomGridItem item xs={6}>
          <S.CustomButton colorname={Colors.gray1} onClick={actionButtonConfirm} fullWidth>
            Confirmar
          </S.CustomButton>
        </S.CustomGridItem>
      </S.CustomGridContainer>
    </S.Modal>
  );
};
