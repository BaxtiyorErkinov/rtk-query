import React from 'react';
import { postService, useGetPostsQuery } from '../services/postService';

type Props = {};

const MainComponent = (props: Props) => {
  const { data } = useGetPostsQuery(5);
  console.log(data);

  return <div>PostsComponent</div>;
};

export default MainComponent;
