import React from 'react';
import { NavHandlersProvider, type NavContextT } from '/src/navHandler';
import { navToPost, navToPosts } from '/src/posts/navEvents';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteUfns } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createArchivedPostsNavHandler = () => {
  return {
    navToPosts: ((navContext: NavContextT) => {
      const ufn = getRouteUfns<PostsRoutesT>().archivedPosts(history.push);
      ufn();
    }) as typeof navToPosts,
    navToPost: ((navContext: NavContextT, postId: string) => {
      const ufn = getRouteUfns<PostsRoutesT>().archivedPost(history.push);
      ufn({ postId });
    }) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const ArchivedPostsNavHandler = (props: PropsT) => {
  const handler = useBuilder(() => {
    return {
      id: 'ArchivedPostsNavHandler',
      table: createArchivedPostsNavHandler(),
    };
  });
  return (
    <NavHandlersProvider extend value={[handler]}>
      {props.children}
    </NavHandlersProvider>
  );
};
