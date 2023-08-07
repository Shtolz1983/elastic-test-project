import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  select: string;
  input: string;
  inputError: string;
}

const initialState: SearchState = {
  select: '',
  input: '',
  inputError: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelect(state, action: PayloadAction<string>) {
      state.select = action.payload;
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    setInputError(state, action: PayloadAction<string>) {
      state.inputError = action.payload;
    },
  },
});

export default searchSlice.reducer;
