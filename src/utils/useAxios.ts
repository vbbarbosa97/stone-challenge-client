/* eslint-disable no-return-await */
import mainAxios from 'axios';
import { baseApiUrl } from './values';

const axios = mainAxios.create({
  baseURL: baseApiUrl,
});

export async function axiosPostApi<T>(route: string, body: unknown = null) {
  // eslint-disable-next-line no-extra-boolean-cast
  const jsonBody = !!body ? JSON.stringify(body) : null;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNzJBNDMzRS1GMzZCLTE0MTAtOEIzOS0wMDdDMDQ1NEZFQkYiLCJpYXQiOjE2MTMyNDMyMjd9.CFxnqVluSpcjaThjoZSyuWEH-PlG5azCS6JoRY50c_Y';
  return await axios
    .post<T>(route, jsonBody, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosPutApi<T>(route: string, body: unknown) {
  const jsonBody = JSON.stringify(body);
  const token = '';
  return await axios
    .put<T>(route, jsonBody, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosGetApi<T>(route: string) {
  const token = '';
  return await axios
    .get<T>(route, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

export async function axiosDeleteApi<T>(route: string) {
  const token = '';
  return await axios
    .delete<T>(route, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
