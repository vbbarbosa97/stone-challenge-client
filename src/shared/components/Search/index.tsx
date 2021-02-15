/* eslint-disable no-nested-ternary */
import { CircularProgress, IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Colors } from '../../styles/colors';
import { IGenericCard } from '../GenericCard';
import { InputSearch } from './InputSearch';
import { ListCard } from './ListCard';
import NoResultImg from '../../../assets/noResults.svg';
import * as S from './styles';

interface ISearch {
  data: IGenericCard[];
  titlePage: string;
  titleSearch: string;
  loading: boolean;
  firstSearchPerformed: boolean;
  actionSearch: (value: string) => Promise<void>;
  actionNavigateBack: () => void;
}

export const Search = ({
  data,
  titlePage,
  titleSearch,
  loading,
  firstSearchPerformed,
  actionSearch,
  actionNavigateBack,
}: ISearch) => {
  return (
    <S.MainContainer>
      <S.Header>
        <IconButton onClick={actionNavigateBack}>
          <IoMdArrowBack color={Colors.strongRed} />
        </IconButton>
        <S.DivTitle>
          <h4>{titlePage}</h4>
        </S.DivTitle>
      </S.Header>
      <S.CustomDiv>
        <h3>{titleSearch}</h3>
        <InputSearch actionSearch={actionSearch} />

        {loading ? (
          <S.DivLoading>
            <CircularProgress style={{ color: Colors.strongRed }} size={36} />
          </S.DivLoading>
        ) : firstSearchPerformed && data.length === 0 ? (
          <S.DivNoResult>
            <img src={NoResultImg} alt="NoResults" />
            <strong>Nenhum resultado encontrado.</strong>
          </S.DivNoResult>
        ) : (
          <div style={{ paddingTop: 42 }}>
            <ListCard data={data} />
          </div>
        )}
      </S.CustomDiv>
    </S.MainContainer>
  );
};
