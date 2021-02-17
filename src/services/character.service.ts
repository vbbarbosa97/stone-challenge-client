import { ResponseApiMarvel } from '../models/ResponseApiMarvel';
import { IResult } from '../models/Result';
import { getUserLocalStorage } from '../utils/functions';
import { axiosPostApi } from '../utils/useAxios';

export const getCharacters = async (value: string) => {
  const user = getUserLocalStorage();

  const body = {
    userId: user?.id,
    searchParameter: value,
  };

  const response = await axiosPostApi<IResult<ResponseApiMarvel>>('character', body);
  return response;
};

export const getComicsOfCharacters = async (characterId: String) => {
  const user = getUserLocalStorage();

  const body = {
    userId: user?.id,
  };

  const url = `character/${characterId}/comics`;

  const response = await axiosPostApi<IResult<ResponseApiMarvel>>(url, body);
  return response;
};
