import React from 'react';
import { NavContext, NavHandlersProvider } from '/src/navHandler';
import { toPost } from '/src/posts/navFunctions';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteFns } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createNavFunctionTable = () => {
  return {
    toPost: ((navContext: NavContext) => (postId: string) => {
      const url = getRouteFns<PostsRoutesT>().archivedPost({ postId });
      return { url, nav: () => history.push(url) };
    }) as typeof toPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const ArchivedPostsNavHandler = (props: PropsT) => {
  const handler = useBuilder(() => {
    return {
      id: 'ArchivedPostsNavHandler',
      navFunctionTable: createNavFunctionTable(),
    };
  });
  return (
    <NavHandlersProvider extend value={[handler]}>
      {props.children}
    </NavHandlersProvider>
  );
};
