import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addTask: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleAddTask: (state) => {
      return (state = { ...state, addTask: !state.addTask });
    },
  },
});

export const { toggleAddTask } = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
