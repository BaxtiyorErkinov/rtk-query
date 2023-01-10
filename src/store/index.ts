import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Posts from './Slices/Posts';

const rootReducer = combineReducers({
  Posts,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
