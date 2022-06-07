import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'features/userSlice';
import { toggleReducer } from 'features/toggleSlice';
import { guardReducer } from 'features/guardSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggle: toggleReducer,
    guard: guardReducer,
  },
});
