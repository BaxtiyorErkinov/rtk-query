import React from 'react';
import { useAppSelector } from './hooks/redux';

const App = () => {
  const { Posts } = useAppSelector((state) => state);
  console.log(Posts);
  return <div></div>;
};

export default App;
