import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../models/posts';

interface IState {
  posts: [] | IPost[];
  loading: boolean;
  error: string;
}

const initialState: IState = {
  posts: [],
  loading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state) => {},
  },
});

export default postsSlice.reducer;
