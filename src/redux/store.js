import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'features/userSlice';
import { toggleReducer } from 'features/toggleSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggle: toggleReducer,
  },
});
