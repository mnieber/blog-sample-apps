import { getRouteTable as getPostsRouteTable } from '/src/posts/routeTable';
import {
  RouteFnByNameT,
  RouteTable,
  RouteUfnByNameT,
} from '/src/routes/utils/RouteTable';

export const createRouteTable = () => {
  const routeTable = new RouteTable();
  routeTable.addTable(getPostsRouteTable(), '');
  return routeTable;
};

export const routeTable = createRouteTable();

export const getRoutes = <T>() => {
  return routeTable.routeFnByName as RouteFnByNameT<T>;
};

export const getRouteUfns = <T>() => {
  return routeTable.routeUfnByName as RouteUfnByNameT<T>;
};
