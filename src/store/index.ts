import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Posts from './Slices/Posts';
import { postService } from '../services/postService';

const rootReducer = combineReducers({
  Posts,
  allPosts: postService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postService.middleware),
  });
};

export type RootState = ReturnType<typeof setupStore>;
