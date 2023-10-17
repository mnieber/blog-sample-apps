import * as R from 'ramda';
import React from 'react';
import { PostT } from '/src/api/types';

export const PostsContext = React.createContext<any>(null);

export const usePostsContext = () => {
  const context = React.useContext(PostsContext);
  if (!context) {
    throw new Error(
      'usePostsContext must be used within a PostsContext.Provider'
    );
  }
  return context;
};

export const postsCtx = R.mergeAll([
  {
    posts: [usePostsContext, 'posts'] as any as PostT[],
  },
]);
