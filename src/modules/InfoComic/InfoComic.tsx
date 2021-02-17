/* eslint-disable no-nested-ternary */
import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import GenericCard, { IGenericCard } from '../../shared/components/GenericCard';
import { Loading } from '../../shared/components/Loading';
import { NoResults } from '../../shared/components/NoResults';
import { Colors } from '../../shared/styles/colors';
import * as S from './styles/index';

interface InfoProps {
  navigateToDashboard: () => void;
  characters: IGenericCard[];
  loading: boolean;
}

export const InfoComic = ({ navigateToDashboard, characters, loading }: InfoProps) => {
  return (
    <S.MainContainer>
      <S.Header>
        <IconButton onClick={navigateToDashboard}>
          <IoMdArrowBack color={Colors.strongRed} />
        </IconButton>
        <S.DivTitle>
          <h4>Personagens</h4>
        </S.DivTitle>
      </S.Header>
      <S.CustomDiv>
        <S.CustomDivContainer>
          {loading ? (
            <Loading />
          ) : characters.length === 0 ? (
            <NoResults />
          ) : (
            <Grid justify="center" container spacing={4}>
              {characters.map(item => (
                <S.CustomGrid key={Math.random()} item xs={12} sm={6} md={6} lg={4}>
                  <GenericCard
                    key={item.title}
                    imgUrl={item.imgUrl}
                    isFavorite={item.isFavorite}
                    title={item.title}
                    type={item.type}
                    id={item.id}
                    actionAddFavorite={item.actionAddFavorite}
                    actionRemoveFavorite={item.actionRemoveFavorite}
                    linkDetail={item.linkDetail}
                  />
                </S.CustomGrid>
              ))}
            </Grid>
          )}
        </S.CustomDivContainer>
      </S.CustomDiv>
    </S.MainContainer>
  );
};
