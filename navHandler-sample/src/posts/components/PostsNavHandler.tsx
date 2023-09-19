import React from 'react';
import {
  NavHandlersProvider,
  createNavTarget,
  type NavContextT,
} from '/src/navHandler';
import { navToPost } from '/src/posts/navFunctions';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteFns } from '/src/routes/routeTable';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export const createNavFunctionTable = () => {
  return {
    navToPost: ((navContext: NavContextT) => (postId: string) =>
      createNavTarget(
        getRouteFns<PostsRoutesT>().post({ postId }),
        history.push
      )) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const PostsNavHandler = (props: PropsT) => {
  const handler = useBuilder(() => {
    return {
      id: 'PostsNavHandler',
      navFunctionTable: createNavFunctionTable(),
    };
  });
  return (
    <NavHandlersProvider extend value={[handler]}>
      {props.children}
    </NavHandlersProvider>
  );
};
