/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestAddComicFavorite } from '../../models/AddComicFavorite';
import { Card, InfoCard, typeCard } from '../../models/Card';
import { getComics } from '../../services/comic.service';
import { addComicFavorite, removeComicFavorite } from '../../services/user.service';
import { IGenericCard } from '../../shared/components/GenericCard';
import { SearchComic } from './SearchComic';

const SearchComicScreen = () => {
  const [comics, setComics] = useState<IGenericCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstSearchPerformed, setFirstSearchPerformed] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const navigateToRoute = (id: string, type: typeCard) => {
    if (type === 'Character') {
      const urlCharacter = `/character/${id}/comics`;
      history.push(urlCharacter);
    } else {
      const urlComic = `/comic/${id}/characters`;
      history.push(urlComic);
    }
  };

  const actionSearch = async (value: string) => {
    try {
      setFirstSearchPerformed(true);
      setLoading(true);
      const response = await getComics(value);
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayComicTrated: IGenericCard[] = [];

      response.data.results.forEach(item => {
        let comicTrated: IGenericCard = {} as IGenericCard;

        const cardTrated = new Card('Comic', item);
        comicTrated = cardTrated;
        comicTrated.actionAddFavorite = actionAddComicFavorite;
        comicTrated.actionRemoveFavorite = actionRemoveComicFavorite;
        comicTrated.actionNavigate = navigateToRoute;

        arrayComicTrated.push(comicTrated);
      });

      setComics(arrayComicTrated);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Falha ao buscar revistas.', { variant: 'error' });
    }
  };

  const actionAddComicFavorite = async (data: InfoCard) => {
    try {
      const comicTrated = new RequestAddComicFavorite(data);

      const response = await addComicFavorite(comicTrated);
      if (response.success) {
        enqueueSnackbar('Revista adicionada como favorita.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao favoritar revista.', { variant: 'error' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao favoritar revista.', { variant: 'error' });
      return false;
    }
  };

  const actionRemoveComicFavorite = async (id: string) => {
    try {
      const response = await removeComicFavorite(id);
      if (response.success) {
        enqueueSnackbar('Revista removida dos favoritos.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao remover revista dos favoritos.', { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar('Falha ao remover revista dos favoritos.', { variant: 'error' });
      return true;
    }
  };

  const actionNavigateBack = () => {
    history.push('/dashboard');
  };

  return (
    <SearchComic
      data={comics}
      loading={loading}
      firstSearchPerformed={firstSearchPerformed}
      actionSearch={actionSearch}
      actionNavigateBack={actionNavigateBack}
    />
  );
};

export default SearchComicScreen;
