import React from 'react';
import { NavHandlersProvider, type NavContextT } from '/src/navHandler';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRoutes } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createArchivedPostsNavHandler = () => {
  return {
    toPosts: (navContext: NavContextT) => {
      const path = getRoutes<PostsRoutesT>().archivedPosts();
      return {
        path,
        ufn: (path: string) => history.push(path),
      };
    },
    toPost: (navContext: NavContextT, postId: string) => {
      const path = getRoutes<PostsRoutesT>().archivedPost({ postId });
      return {
        path,
        ufn: (path: string) => history.push(path),
      };
    },
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
