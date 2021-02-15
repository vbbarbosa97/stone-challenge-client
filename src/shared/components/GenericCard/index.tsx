import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FiBook, FiExternalLink, FiUsers } from 'react-icons/fi';
import { Colors } from '../../styles/colors';
import * as S from './styles';

export interface IGenericCard {
  id: string;
  type: 'Comic' | 'Character';
  imgUrl: string;
  isFavorite: boolean;
  title: string;
  linkDetail: string;
  routeNavigate: string;
  actionAddFavorite?: (id: string) => Promise<void>;
  actionRemoveFavorite?: (id: string) => Promise<void>;
}

const GenericCard = ({ type, imgUrl, isFavorite, title, linkDetail, routeNavigate }: IGenericCard) => {
  const [loadingStar, setLoadingStar] = useState<boolean>(false);

  const handleActionAddFavorite = async () => {
    setLoadingStar(true);
    // await actionAddFavorite(id);
    setLoadingStar(false);
  };

  const handleActionRemoveFavorite = async () => {
    setLoadingStar(true);
    // await actionRemoveFavorite(id);
    setLoadingStar(false);
  };

  const actionDetail = () => {
    window.location.href = linkDetail;
  };

  const actionNavigate = () => {
    console.log(routeNavigate);
  };

  const actions = [
    {
      name: 'Favorito',
      icon: isFavorite ? (
        <S.Star loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
      ) : (
        <S.StarBorder loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
      ),
      action: isFavorite ? handleActionRemoveFavorite : handleActionAddFavorite,
    },
    {
      name: 'Detalhes',
      icon: <FiExternalLink size={20} />,
      action: actionDetail,
    },
    {
      name: type === 'Character' ? 'Revistas' : 'Personagens',
      icon: type === 'Character' ? <FiBook size={20} /> : <FiUsers size={20} />,
      action: actionNavigate,
    },
  ];
  return (
    <S.MainContainer imgurl={imgUrl}>
      <S.CustomDiv>
        <S.Information>
          <strong>{title}</strong>
        </S.Information>
        <S.Actions>
          {actions.map(item => (
            <div key={Math.random()}>
              <IconButton onClick={item.action}>{item.icon}</IconButton>
              <strong>{item.name}</strong>
            </div>
          ))}
        </S.Actions>
      </S.CustomDiv>
    </S.MainContainer>
  );
};

export default GenericCard;
