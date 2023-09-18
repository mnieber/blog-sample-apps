import React from 'react';
import {
  NavHandlersProvider,
  createNavTarget,
  type NavContextT,
} from '/src/navHandler';
import { navToPost } from '/src/posts/navTargets';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteFns } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';
import { assertType } from '/src/utils/types';

export const createArchivedPostsNavHandler = () => {
  return {
    navToPost: assertType<typeof navToPost>(
      (navContext: NavContextT, postId: string) => {
        return createNavTarget(
          getRouteFns<PostsRoutesT>().archivedPost({ postId }),
          history.push
        );
      }
    ),
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
