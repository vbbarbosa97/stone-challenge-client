import { IconButton } from '@material-ui/core';
import React from 'react';
import { FiBook, FiExternalLink, FiUsers } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Colors } from '../../styles/colors';
import * as S from './styles';

interface IGernericCard {
  type: 'Comic' | 'Character';
  imgUrl: string;
  isFavorite: boolean;
  title: string;
  actionAddFavorite?: () => void;
  actionRemoveFavorite?: () => void;
  actionDetail?: () => void;
  actionNavigate?: () => void;
}

const GenericCard = ({
  type,
  imgUrl,
  isFavorite,
  title,
  actionAddFavorite,
  actionRemoveFavorite,
  actionDetail,
  actionNavigate,
}: IGernericCard) => {
  const actions = [
    {
      name: 'Favorito',
      icon: isFavorite ? <MdFavorite size={20} /> : <MdFavoriteBorder size={20} />,
      action: isFavorite ? actionRemoveFavorite : actionAddFavorite,
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
    <S.Container imgurl={imgUrl}>
      <S.Content>
        <S.Information>
          <strong>{title}</strong>
        </S.Information>
        <S.Actions>
          {actions.map(item => (
            <div key={item.name}>
              <IconButton>{item.icon}</IconButton>
              <strong>{item.name}</strong>
            </div>
          ))}
        </S.Actions>
      </S.Content>
    </S.Container>
  );
};

export default GenericCard;
