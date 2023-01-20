import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../models/ITodo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodo[], any>({
      query: () => ({
        method: 'GET',
        url: '/todos',
        params: {
          _limit: 5,
        },
      }),
    }),
  }),
});

export const { reducer: todosReducer, useGetAllTodosQuery } = todosApi;
