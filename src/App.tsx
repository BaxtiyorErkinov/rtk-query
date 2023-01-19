import React from 'react';
import MainComponent from './components/MainComponent';
import PostsComponent from './components/PostsComponent';
import { useAppSelector } from './hooks/redux';
import { postService } from './services/postService';

const App = () => {
  return (
    <div>
      <PostsComponent />
      <MainComponent />
    </div>
  );
};

export default App;
