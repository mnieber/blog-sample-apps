import { RouteTable } from '/src/routes/utils/RouteTable';

export const getRouteTable = () => {
  const routeTable = new RouteTable();

  routeTable.addRoutes({
    posts: () => '/posts',
    post: () => '/posts/:postId',
    archivedPosts: () => '/archived-posts',
    archivedPost: () => '/archived-posts/:postId',
  });

  return routeTable;
};
