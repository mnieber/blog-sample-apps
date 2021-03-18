import { observer } from 'mobx-react-lite';
import React from 'react';
import { navHandler } from '/src/navHandler/NavHandler';
import { useInstallNavPage } from '/src/navHandler/hooks';
import { navToPost, navToPosts } from '/src/posts/navEvents';

export const createArchivedPostsNavPage = () => {
  return {
    navToPosts: (() => {
      const ufn = navHandler.routeUfns.archivedPosts(navHandler.history.push);
      ufn();
    }) as typeof navToPosts,
    navToPost: ((postId: string) => {
      const ufn = navHandler.routeUfns.archivedPost(navHandler.history.push);
      ufn({ postId });
    }) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const ArchivedPostsNavPage = observer((props: PropsT) => {
  useInstallNavPage('ArchivedPostsNavPage', createArchivedPostsNavPage());
  return <>{props.children}</>;
});
