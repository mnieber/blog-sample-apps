import { getRouteTable as getPostsRouteTable } from '/src/posts/routeTable';
import { RouteFnByNameT, RouteTable } from '/src/routes/utils/RouteTable';

export const createRouteTable = () => {
  const routeTable = new RouteTable();
  routeTable.addTable(getPostsRouteTable(), '');
  return routeTable;
};

export const routeTable = createRouteTable();

export const getRouteFns = <T>() => {
  return routeTable.routeFnByName as RouteFnByNameT<T>;
};
