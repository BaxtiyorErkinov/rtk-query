import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from './hooks/redux';
import { useGetAllTodosQuery } from './services/todos.service';
import { RootState } from './store';

const App = () => {
  useGetAllTodosQuery('');
  const state = useSelector((state) => state);
  console.log(state);
  return <div></div>;
};

export default App;
