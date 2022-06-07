import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addGuard: false,
  editGuard: false,
  deleteGuard: false,
  confirmGuard: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleAddGuard: (state) => {
      return (state = { ...state, addGuard: !state.addGuard });
    },
    toggleEditGuard: (state) => {
      return (state = { ...state, editGuard: !state.editGuard });
    },
    toggleDeleteGuard: (state) => {
      return (state = { ...state, deleteGuard: !state.deleteGuard });
    },
    toggleConfirmGuard: (state) => {
      return (state = { ...state, confirmGuard: !state.confirmGuard });
    },
  },
});

export const {
  toggleAddGuard,
  toggleEditGuard,
  toggleDeleteGuard,
  toggleConfirmGuard,
} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
