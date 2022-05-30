import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    details: null,
    tokens: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value.details = action.payload;
    },
    setTokens: (state, action) => {
      state.value.tokens = action.payload;
    },
  },
});

export const { setUser, setTokens } = userSlice.actions;

export const userReducer = userSlice.reducer;
