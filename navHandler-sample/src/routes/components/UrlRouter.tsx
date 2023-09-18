/*
The UrlRouter calls useRoutes to get the routing table for the application.
In this routing table, there are two main branches: /posts and /archived-posts.
If we render a page in /posts, then the PostsNavHandler will be mounted. In this case,
calls to navToPost will be routed to /posts/:postId. Similarly, if we render a page
in /archived-posts, then the ArchivedPostsNavHandler will be mounted, and calls to
navToPost will be routed to /archived-posts/:postId.

Continue by:
- reading the useRoutes.ts file.
*/

import { observer } from 'mobx-react-lite';
import { DefaultPropsProvider } from 'react-default-props-context';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getPosts } from '/src/api/queries/getPosts';
import { NavBar } from '/src/frames/components/NavBar';
import { ArchivedPostsNavHandler } from '/src/posts/components/ArchivedPostsNavHandler';
import { PostListView } from '/src/posts/components/PostListView';
import { PostView } from '/src/posts/components/PostView';
import { PostsNavHandler } from '/src/posts/components/PostsNavHandler';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { getRoutes } from '/src/routes/routeTable';

type PropsT = {};

export const UrlRouter = observer((props: PropsT) => {
  const routes = getRoutes<PostsRoutesT>();
  const posts = getPosts();

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to={routes.posts()} />
        </Route>
        <Route path={routes.posts()}>
          <PostsNavHandler>
            <DefaultPropsProvider
              value={{ defaultProps: { posts: () => posts.posts } }}
            >
              <PostListView className="mt-2" />
              <Route path={routes.post()}>
                <PostView className="mt-8 self-start" />
              </Route>
            </DefaultPropsProvider>
          </PostsNavHandler>
        </Route>
        <Route path={routes.archivedPosts()}>
          <ArchivedPostsNavHandler>
            <DefaultPropsProvider
              value={{ defaultProps: { posts: () => posts.archivedPosts } }}
            >
              <PostListView className="mt-2" />
              <Route path={routes.archivedPost()}>
                <PostView className="mt-8 self-start" />
              </Route>
            </DefaultPropsProvider>
          </ArchivedPostsNavHandler>
        </Route>
      </Switch>
    </>
  );
});
