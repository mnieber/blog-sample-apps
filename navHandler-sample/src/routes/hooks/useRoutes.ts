/*
The useRouteTable hook returns the aggregated routesTable that is provided
by the RouteTableProvider component.

This useRoutes hook returns the route functions in this aggregated routeTable.
A route function returns a url, either with interpolated url parameters (this happens
when you pass an object with url parameter values to the route function) or without interpolation
(when you don't pass an argument).

This useRouteUfns hook returns the route update functions in the aggregated routeTable. A route
update function is similar to a route function, but instead of returning the url, it updates
the url in the browser.

Continue by:

- reading the RouteTableProvider.tsx file.
*/

import React from 'react';
import { RouteTableContext } from '/src/routes/components/RouteTableProvider';
import { RouteTable, WrapUfn } from '/src/routes/utils/RouteTable';

export const useRouteTable = () => {
  const routeTable: RouteTable = React.useContext(RouteTableContext);
  return routeTable;
};

export const useRoutes = <T = any>(): T => {
  return useRouteTable().routeFnByName as T;
};

export const useRouteUfns = <T = any>(): WrapUfn<T> => {
  return { routeUfns: useRouteTable().routeUfnByName, history } as WrapUfn<T>;
};
