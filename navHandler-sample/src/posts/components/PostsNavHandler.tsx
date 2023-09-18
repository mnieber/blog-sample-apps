import React from 'react';
import { NavHandlersProvider, type NavContextT } from '/src/navHandler';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRoutes } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createPostsNavHandler = () => {
  return {
    toPosts: (navContext: NavContextT) => {
      const path = getRoutes<PostsRoutesT>().posts();
      return {
        path,
        ufn: (path: string) => history.push(path),
      };
    },
    toPost: (navContext: NavContextT, postId: string) => {
      const path = getRoutes<PostsRoutesT>().post({ postId });
      return {
        path,
        ufn: (path: string) => history.push(path),
      };
    },
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const PostsNavHandler = (props: PropsT) => {
  const handler = useBuilder(() => {
    return {
      id: 'PostsNavHandler',
      table: createPostsNavHandler(),
    };
  });
  return (
    <NavHandlersProvider extend value={[handler]}>
      {props.children}
    </NavHandlersProvider>
  );
};

export const assertType = <T,>(x: T) => x;
