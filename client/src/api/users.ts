import axios from 'axios';
import { IUser } from '../models/IUser';
import { SearchState } from '../redux/reducers/search';

export const fetchSearchUser = async (
  searchState: SearchState
): Promise<IUser[] | string> => {
  try {
    const res = await axios.get<IUser[]>('http://localhost:5000/users/search', {
      params: { type: searchState.select, value: searchState.input },
    });

    return res.data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) return Promise.reject(error.message);
    return Promise.reject('Unexpected error');
  }
};

export interface IFetchPagination {
  limit: number;
  page: number;
}

export const fetchPaginationUser = async (
  userPagination: IFetchPagination
): Promise<{ users: IUser[]; count: number } | string> => {
  try {
    const res = await axios.get<IUser[]>('http://localhost:5000/users/', {
      params: { limit: userPagination.limit, page: userPagination.page },
    });

    return { users: res.data, count: +res.headers['x-total-count'] };
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error.message);
    return Promise.reject('Unexpected error');
  }
};
