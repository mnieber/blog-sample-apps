import { observer } from 'mobx-react-lite';
import React from 'react';
import { useInstallNavPage } from '/src/navHandler/hooks';
import { navToPost, navToPosts } from '/src/posts/navEvents';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteUfns } from '/src/routes/routeTable';

export const createArchivedPostsNavPage = () => {
  return {
    navToPosts: (() => {
      const ufn = getRouteUfns<PostsRoutesT>().archivedPosts(history.push);
      ufn();
    }) as typeof navToPosts,
    navToPost: ((postId: string) => {
      const ufn = getRouteUfns<PostsRoutesT>().archivedPost(history.push);
      ufn({ postId });
    }) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const ArchivedPostsNavPage = observer((props: PropsT) => {
  useInstallNavPage('ArchivedPostsNavPage', createArchivedPostsNavPage());
  return <>{props.children}</>;
});
