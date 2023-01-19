import React from 'react';
import { postService, useGetPostsQuery } from '../services/postService';

type Props = {};

const PostsComponent = (props: Props) => {
  const { data } = useGetPostsQuery(10);
  console.log(data);

  return <div>PostsComponent</div>;
};

export default PostsComponent;
