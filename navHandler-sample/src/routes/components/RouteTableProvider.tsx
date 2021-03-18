/*
The RouteTableProvider component aggregates all route tables of the individual feature modules.
In this case, there is only one feature module: the posts module.

To access the aggregated route table, use the useRouteTable() hook, or its derived useRoutes
and useRouteUfns hooks.

Continue by:

- reading the posts/getRouteTable.ts file.
*/

import React from 'react';
import { getRouteTable as getPostsRouteTable } from '/src/posts/routeTable';
import { RouteTable } from '/src/routes/utils/RouteTable';

export const createRouteTable = () => {
  const routeTable = new RouteTable();
  routeTable.addTable(getPostsRouteTable(), '');
  return routeTable;
};

export const routeTable = createRouteTable();
export const RouteTableContext = React.createContext<RouteTable>(routeTable);

type PropsT = React.PropsWithChildren<{}>;

export const RouteTableProvider = (props: PropsT) => {
  return (
    <RouteTableContext.Provider value={routeTable}>
      {props.children}
    </RouteTableContext.Provider>
  );
};
