import { ResponseApiMarvel } from '../models/ResponseApiMarvel';
import { IResult } from '../models/Result';
import { axiosPostApi } from '../utils/useAxios';

export const getCharacters = async (value: string) => {
  const body = {
    userId: '362A433E-F36B-1410-8B39-007C0454FEBF',
    searchParameter: value,
  };

  const response = await axiosPostApi<IResult<ResponseApiMarvel>>('character', body);
  return response;
};
