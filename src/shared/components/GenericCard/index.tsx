import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { FiBook, FiExternalLink, FiUsers } from 'react-icons/fi';
import { InfoCard } from '../../../models/Card';
import { Colors } from '../../styles/colors';
import * as S from './styles';

export interface IGenericCard {
  id: string;
  type: 'Comic' | 'Character';
  description?: string | null;
  imgUrl: string;
  isFavorite: boolean;
  title: string;
  linkDetail: string;
  actionAddFavorite?: (data: InfoCard) => Promise<boolean>;
  actionRemoveFavorite?: (id: string) => Promise<boolean>;
  actionNavigate?: (id: string) => void;
}

const GenericCard = ({
  id,
  type,
  imgUrl,
  isFavorite,
  title,
  linkDetail,
  actionAddFavorite,
  actionRemoveFavorite,
  actionNavigate,
}: IGenericCard) => {
  const [loadingStar, setLoadingStar] = useState<boolean>(false);
  const [cardFavorite, setCardFavorite] = useState<boolean>(isFavorite);

  const handleActionAddFavorite = async () => {
    if (actionAddFavorite) {
      setLoadingStar(true);
      const info: InfoCard = {
        id,
        imgUrl,
        title,
        linkDetail,
      };
      const response = await actionAddFavorite(info);

      setCardFavorite(response);
      setLoadingStar(false);
    }
  };

  const handleActionRemoveFavorite = async () => {
    if (actionRemoveFavorite) {
      setLoadingStar(true);
      const response = await actionRemoveFavorite(id);

      setCardFavorite(response);
      setLoadingStar(false);
    }
  };

  const actionDetail = () => {
    window.location.href = linkDetail;
  };

  return (
    <S.MainContainer imgurl={imgUrl}>
      <S.CustomDiv>
        <S.Information>
          <strong>{title}</strong>
        </S.Information>
        <S.Actions>
          <div>
            {cardFavorite ? (
              <IconButton onClick={handleActionRemoveFavorite}>
                <S.Star loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
              </IconButton>
            ) : (
              <IconButton onClick={handleActionAddFavorite}>
                <S.StarBorder loading={loadingStar ? 'yes' : 'no'} size={20} color={Colors.yellow} />
              </IconButton>
            )}
            <strong>Favorito</strong>
          </div>
          <div>
            <IconButton onClick={actionDetail}>
              <FiExternalLink size={20} />
            </IconButton>
            <strong>Detalhes</strong>
          </div>
          <div>
            {type === 'Character' && actionNavigate && (
              <IconButton onClick={() => actionNavigate!(id)}>
                <FiBook size={20} />
              </IconButton>
            )}
            {type === 'Comic' && actionNavigate && (
              <IconButton onClick={() => actionNavigate!(id)}>
                <FiUsers size={20} />
              </IconButton>
            )}

            <strong>{type === 'Character' && actionNavigate && 'Revistas'}</strong>
            <strong>{type === 'Comic' && actionNavigate && 'Personagens'}</strong>
          </div>
        </S.Actions>
      </S.CustomDiv>
    </S.MainContainer>
  );
};

export default GenericCard;
