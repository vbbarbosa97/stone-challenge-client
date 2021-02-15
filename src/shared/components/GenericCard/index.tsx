import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FiBook, FiExternalLink, FiUsers } from 'react-icons/fi';
import { Colors } from '../../styles/colors';
import * as S from './styles';

interface IGernericCard {
  type: 'Comic' | 'Character';
  imgUrl: string;
  isFavorite: boolean;
  title: string;
  // actionAddFavorite?: () => void;
  // actionRemoveFavorite?: () => void;
  actionDetail?: () => void;
  actionNavigate?: () => void;
}

const GenericCard = ({
  type,
  imgUrl,
  isFavorite,
  title,
  // actionAddFavorite,
  // actionRemoveFavorite,
  actionDetail,
  actionNavigate,
}: IGernericCard) => {
  const [loadingStar, setLoadingStar] = useState<boolean>(false);

  const handleActionAddFavorite = () => {
    setLoadingStar(true);

    setTimeout(() => {
      setLoadingStar(false);
    }, 3000);
  };

  const actions = [
    {
      name: 'Favorito',
      icon: isFavorite ? (
        <S.Star loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
      ) : (
        <S.StarBorder loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
      ),
      action: isFavorite ? handleActionAddFavorite : handleActionAddFavorite,
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
              <IconButton onClick={item.action}>{item.icon}</IconButton>
              <strong>{item.name}</strong>
            </div>
          ))}
        </S.Actions>
      </S.Content>
    </S.Container>
  );
};

export default GenericCard;
