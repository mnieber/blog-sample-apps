import { RouteTable } from '/src/routes/utils/RouteTable';

export const getRouteTable = () => {
  const routeTable = new RouteTable();
  routeTable.addRoutes(routes);
  return routeTable;
};

export const routes = {
  posts: () => '/posts',
  post: () => '/posts/:postId',
  archivedPosts: () => '/archived-posts',
  archivedPost: () => '/archived-posts/:postId',
};

export type RoutesT = {
  posts: () => string;
  post: (params: { postId: string }) => string;
  archivedPosts: () => string;
  archivedPost: (params: { postId: string }) => string;
};
