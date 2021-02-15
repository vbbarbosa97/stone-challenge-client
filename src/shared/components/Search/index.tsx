import { CircularProgress, IconButton } from '@material-ui/core';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Colors } from '../../styles/colors';
import { IGenericCard } from '../GenericCard';
import { InputSearch } from './InputSearch';
import { ListCard } from './ListCard';
import * as S from './styles';

interface ISearch {
  data: IGenericCard[];
  titlePage: string;
  titleSearch: string;
  loading: boolean;
  actionSearch: (value: string) => Promise<void>;
}

export const Search = ({ data, titlePage, titleSearch, loading, actionSearch }: ISearch) => {
  return (
    <S.MainContainer>
      <S.Header>
        <IconButton>
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
        ) : (
          <div style={{ paddingTop: 42 }}>
            <ListCard data={data} />
          </div>
        )}
      </S.CustomDiv>
    </S.MainContainer>
  );
};
