import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todosApi } from '../services/todos.service';
import todosSlice from './Slices/Todos.slice';

const rootReducer = combineReducers({
  todos: todosSlice,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
