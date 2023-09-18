import { action, computed, makeObservable, observable } from 'mobx';
import * as R from 'ramda';
import { generatePath } from 'react-router-dom';
import { ObjT } from '/src/utils/types';

export type RouteFnByNameT<T = any> = {
  [P in keyof T]: (args?: unknown) => string;
};

export type RouteSpecT = {
  path: string | Function;
  name: string;
  prefix: string;
  getRouteArgs: Function;
};

export class RouteTable {
  @observable _routeSpecByName: { [name: string]: RouteSpecT } = {};

  @computed get routeFnByName(): RouteFnByNameT {
    const result: RouteFnByNameT = {};
    for (const routeSpec of R.values(this._routeSpecByName)) {
      result[routeSpec.name] = (args?: unknown) => {
        const routeArgs = routeSpec.getRouteArgs(args);
        const pathStr =
          typeof routeSpec.path === 'function'
            ? routeSpec.path()
            : routeSpec.path;
        return R.isEmpty(routeArgs ?? {})
          ? routeSpec.prefix + pathStr
          : generatePath(routeSpec.prefix + pathStr, routeArgs!);
      };
    }
    return result;
  }

  _addRouteSpec(routeSpec: RouteSpecT) {
    if (this._routeSpecByName[routeSpec.name]) {
      if (this._routeSpecByName[routeSpec.name].path !== routeSpec.path) {
        throw new Error(
          `Route ${routeSpec.name} already exists, with a different path`
        );
      }
    } else {
      this._routeSpecByName[routeSpec.name] = routeSpec;
    }
  }

  @action addRoutes(routeFnByName: ObjT, prefix: string = '') {
    for (const name in routeFnByName) {
      const value = routeFnByName[name];
      // By default, the getRouteArgs function is the identity function.
      // However, the caller can also pass in a function that transforms the
      // args object into a new args object.
      const [path, getRouteArgs] = Array.isArray(value)
        ? value
        : [value, (args: ObjT) => args];

      this._addRouteSpec({ name, prefix, path, getRouteArgs });
    }
  }

  @action addTable(table: RouteTable, prefix: string = '') {
    for (const routeSpec of R.values(table._routeSpecByName)) {
      this._addRouteSpec({
        name: routeSpec.name as string,
        prefix: prefix + routeSpec.prefix,
        path: routeSpec.path,
        getRouteArgs: routeSpec.getRouteArgs,
      });
    }
  }

  constructor() {
    makeObservable(this);
  }
}
