import { configureStore } from '@reduxjs/toolkit';
import searchReduser from '../reducers/search';
import usersReduser from '../reducers/users';

export const store = configureStore({
  reducer: { search: searchReduser, users: usersReduser },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
