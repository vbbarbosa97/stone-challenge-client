/* eslint-disable no-nested-ternary */
import { IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Colors } from '../../styles/colors';
import { IGenericCard } from '../GenericCard';
import { Loading } from '../Loading';
import { NoResults } from '../NoResults';
import { InputSearch } from './InputSearch';
import { ListCard } from './ListCard';
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
          <Loading />
        ) : firstSearchPerformed && data.length === 0 ? (
          <NoResults />
        ) : (
          <div style={{ paddingTop: 42 }}>
            <ListCard data={data} />
          </div>
        )}
      </S.CustomDiv>
    </S.MainContainer>
  );
};
