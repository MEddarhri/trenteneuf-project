import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guardToAdd: {
    date: null,
  },
  guardToDelete: {
    date: null,
    startTime: null,
    endTime: null,
    status: null,
  },
  guardToEdit: {
    date: null,
    startTime: null,
    endTime: null,
    status: null,
  },
  guardToConfirm: {
    date: null,
    startTime: null,
    endTime: null,
    status: null,
  },
};

const guardSlice = createSlice({
  name: 'guard',
  initialState,
  reducers: {
    setGuardToAdd: (state, action) => {
      return (state = { ...state, guardToAdd: action.payload });
    },
    setGuardToEdit: (state, action) => {
      return (state = { ...state, guardToEdit: action.payload });
    },
    setGuardToDelete: (state, action) => {
      return (state = { ...state, guardToDelete: action.payload });
    },
    setGuardToConfirm: (state, action) => {
      return (state = { ...state, guardToConfirm: action.payload });
    },
  },
});

export const {
  setGuardToAdd,
  setGuardToEdit,
  setGuardToDelete,
  setGuardToConfirm,
} = guardSlice.actions;

export const guardReducer = guardSlice.reducer;
