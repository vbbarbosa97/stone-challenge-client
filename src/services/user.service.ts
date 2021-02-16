import { IRequestAddCharacterFavorite, IResponseAddCharacterFavorite } from '../models/AddCharacterFavorite';
import { IRequestAddComicFavorite, IResponseAddComicFavorite } from '../models/AddComicFavorite';
import { IRequestCreateUser, IResponseCreateUser } from '../models/CreateUser';
import { IResult } from '../models/Result';
import { IRequestUpdateUser } from '../models/UpdateUser';
import { axiosPostApi } from '../utils/useAxios';

export const addComicFavorite = async (data: IRequestAddComicFavorite) => {
  const body: IRequestAddComicFavorite = data;

  body.userId = '362A433E-F36B-1410-8B39-007C0454FEBF';

  const response = await axiosPostApi<IResult<IResponseAddComicFavorite>>('user/add-comic-favorite/', body);
  return response;
};

export const removeComicFavorite = async (comicId: string) => {
  const body = {
    comicId,
    userId: '362A433E-F36B-1410-8B39-007C0454FEBF',
  };

  const response = await axiosPostApi<IResult<{}>>('user/remove-comic-favorite/', body);
  return response;
};

export const addCharacterFavorite = async (data: IRequestAddCharacterFavorite) => {
  const body: IRequestAddCharacterFavorite = data;

  body.userId = '362A433E-F36B-1410-8B39-007C0454FEBF';

  const response = await axiosPostApi<IResult<IResponseAddCharacterFavorite>>('user/add-character-favorite/', body);
  return response;
};

export const removeCharacterFavorite = async (characterId: string) => {
  const body = {
    characterId,
    userId: '362A433E-F36B-1410-8B39-007C0454FEBF',
  };

  const response = await axiosPostApi<IResult<{}>>('user/remove-character-favorite/', body);
  return response;
};

export const createUser = async (data: IRequestCreateUser) => {
  const response = await axiosPostApi<IResult<IResponseCreateUser>>('user/create', data);
  return response;
};

export const updateUser = async (data: IRequestUpdateUser) => {
  const userId = '362A433E-F36B-1410-8B39-007C0454FEBF';

  const body: IRequestUpdateUser = {
    ...data,
    id: userId,
  };

  const response = await axiosPostApi<IResult<IResponseCreateUser>>('user/update', body);
  return response;
};
