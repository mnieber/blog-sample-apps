import { observer } from 'mobx-react-lite';
import React from 'react';
import { navHandler } from '/src/navHandler/NavHandler';
import { useInstallNavPage } from '/src/navHandler/hooks';
import { navToPost, navToPosts } from '/src/posts/navEvents';

export const createPostsNavPage = () => {
  return {
    navToPosts: (() => {
      const ufn = navHandler.routeUfns.posts(navHandler.history.push);
      ufn();
    }) as typeof navToPosts,
    navToPost: ((postId: string) => {
      const ufn = navHandler.routeUfns.post(navHandler.history.push);
      ufn({ postId });
    }) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const PostsNavPage = observer((props: PropsT) => {
  useInstallNavPage('PostsNavPage', createPostsNavPage());
  return <>{props.children}</>;
});
