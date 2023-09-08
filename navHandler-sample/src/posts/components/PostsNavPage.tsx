import { observer } from 'mobx-react-lite';
import React from 'react';
import { useInstallNavPage } from '/src/navHandler/hooks';
import { navToPost, navToPosts } from '/src/posts/navEvents';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { history } from '/src/routes/history';
import { getRouteUfns } from '/src/routes/routeTable';

export const createPostsNavPage = () => {
  return {
    navToPosts: (() => {
      const ufn = getRouteUfns<PostsRoutesT>().posts(history.push);
      ufn();
    }) as typeof navToPosts,
    navToPost: ((postId: string) => {
      const ufn = getRouteUfns<PostsRoutesT>().post(history.push);
      ufn({ postId });
    }) as typeof navToPost,
  };
};

export type PropsT = React.PropsWithChildren<{}>;

export const PostsNavPage = observer((props: PropsT) => {
  useInstallNavPage('PostsNavPage', createPostsNavPage());
  return <>{props.children}</>;
});
