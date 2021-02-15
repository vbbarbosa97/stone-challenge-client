/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { IGenericCard } from '../../shared/components/GenericCard';
import { Search } from '../../shared/components/Search';

export const SearchComic = () => {
  const data: IGenericCard[] = [
    {
      title: 'Spider-Girl (Anya Corazon)',
      type: 'Character',
      isFavorite: true,
      imgUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg',
      linkDetail: 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg',
      routeNavigate: '1234',
      id: '12345',
    },
  ];

  const actionSearch = async () => {};

  const titlePage = 'Revistas';
  const titleSearch = 'Todas Revistas';

  return (
    <Search loading={false} actionSearch={actionSearch} titlePage={titlePage} titleSearch={titleSearch} data={data} />
  );
};
