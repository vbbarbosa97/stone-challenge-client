/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestAddCharacterFavorite } from '../../models/AddCharacterFavorite';
import { Card, InfoCard, typeCard } from '../../models/Card';
import { getCharacters } from '../../services/character.service';
import { addCharacterFavorite, removeCharacterFavorite } from '../../services/user.service';
import { IGenericCard } from '../../shared/components/GenericCard';
import { SearchCharacter } from './SearchCharacter';

const SearchCharacterScreen = () => {
  const [characters, setCharacters] = useState<IGenericCard[]>([]);
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
      const response = await getCharacters(value);
      const errorResponse = !response.success;

      if (errorResponse) {
        enqueueSnackbar(response.message, { variant: 'error' });
      }

      const arrayCharacterTrated: IGenericCard[] = [];

      response.data.results.forEach(item => {
        let characterTrated: IGenericCard = {} as IGenericCard;

        const cardTrated = new Card('Character', item);
        characterTrated = cardTrated;
        characterTrated.actionAddFavorite = actionAddCharacterFavorite;
        characterTrated.actionRemoveFavorite = actionRemoveCharacterFavorite;
        characterTrated.actionNavigate = navigateToRoute;

        arrayCharacterTrated.push(characterTrated);
      });

      setCharacters(arrayCharacterTrated);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Falha ao buscar personagens.', { variant: 'error' });
    }
  };

  const actionAddCharacterFavorite = async (data: InfoCard) => {
    try {
      const characterTrated = new RequestAddCharacterFavorite(data);

      const response = await addCharacterFavorite(characterTrated);
      if (response.success) {
        enqueueSnackbar('Personagem adicionado como favorito.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao favoritar personagem.', { variant: 'error' });
      }
      return response.success;
    } catch (error) {
      enqueueSnackbar('Falha ao favoritar personagem.', { variant: 'error' });
      return false;
    }
  };

  const actionRemoveCharacterFavorite = async (id: string) => {
    try {
      const response = await removeCharacterFavorite(id);
      if (response.success) {
        enqueueSnackbar('Personagem removido dos favoritos.', { variant: 'success' });
      } else {
        enqueueSnackbar('Falha ao remover personagem dos favoritos.', { variant: 'error' });
      }
      const responseReturn = !response.success;
      return responseReturn;
    } catch (error) {
      enqueueSnackbar('Falha ao remover personagem dos favoritos.', { variant: 'error' });
      return true;
    }
  };

  const actionNavigateBack = () => {
    history.push('/dashboard');
  };

  return (
    <SearchCharacter
      data={characters}
      loading={loading}
      firstSearchPerformed={firstSearchPerformed}
      actionSearch={actionSearch}
      actionNavigateBack={actionNavigateBack}
    />
  );
};

export default SearchCharacterScreen;
