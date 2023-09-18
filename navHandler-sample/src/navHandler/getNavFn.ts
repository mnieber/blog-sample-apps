import { NavContextT } from './hooks/useNavContext';

export type NavT = {
  path: string;
  ufn: (path: string) => void;
};

export const getNavFn = <NavFn>(
  navContext: NavContextT,
  navFnName: string,
  navFn: NavFn
): ((...args: any[]) => NavT) => {
  for (const handler of navContext.handlers) {
    if (handler.table[navFnName]) {
      return handler.table[navFnName];
    }
  }
  const handlerNames = navContext.handlers.map((handler) => handler.id);
  const handlerNamesStr = handlerNames.length
    ? handlerNames.join(', ')
    : 'none';
  throw Error(
    `${navFnName} not found in navContext requested by ` +
      `${navContext.requesterId}. Handlers: ${handlerNamesStr}`
  );
};
