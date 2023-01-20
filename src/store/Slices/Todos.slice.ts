import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../models/ITodo';
import { todosApi } from '../../services/todos.service';

interface IState {
  todos: ITodo[];
  loading: boolean;
  error: boolean;
}

const initialState: IState = {
  todos: [],
  loading: false,
  error: false,
};

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      todosApi.endpoints.getAllTodos.matchFulfilled,
      (state, { payload }: PayloadAction<ITodo[]>) => {
        state.todos = payload;
      },
    );
  },
});

export default todosSlice.reducer;
