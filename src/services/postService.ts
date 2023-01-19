import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/posts';

export const postService = createApi({
  reducerPath: 'allPosts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (limit) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postService;
