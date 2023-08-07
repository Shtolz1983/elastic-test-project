import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { SearchState } from './search';
import {
  fetchSearchUser,
  fetchPaginationUser,
  IFetchPagination,
} from '../../api/users';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number | null;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: null,
};

export const getSearchUser = createAsyncThunk(
  'users/getSearchUser',
  async (searchState: SearchState) => {
    const response = await fetchSearchUser(searchState);
    return response;
  }
);

export const getPaginationUser = createAsyncThunk(
  'users/getPaginationUser',
  async (userPagination: IFetchPagination) => {
    const response = await fetchPaginationUser({ ...userPagination });
    return response;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSearchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload as IUser[];
        state.count = null;
      })
      .addCase(getSearchUser.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })

      .addCase(getPaginationUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPaginationUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload !== 'string') {
          state.users = action.payload.users;
          state.count = action.payload.count;
        }
      })
      .addCase(getPaginationUser.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
