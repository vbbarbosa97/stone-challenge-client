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
