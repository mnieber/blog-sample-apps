import React from 'react';
import { NavHandlersProvider, type NavContextT } from '/src/navHandler';
import { navToPost, navToPosts } from '/src/posts/navEvents';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteUfns } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createPostsNavHandler = () => {
  return {
    navToPosts: assertType<typeof navToPosts>((navContext: NavContextT) => {
      const ufn = getRouteUfns<PostsRoutesT>().posts(history.push);
      ufn();
    }),
    navToPost: assertType<typeof navToPost>(
      (navContext: NavContextT, postId: string) => {
        const ufn = getRouteUfns<PostsRoutesT>().post(history.push);
        ufn({ postId });
      }
    ),
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
