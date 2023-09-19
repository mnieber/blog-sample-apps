import { NavContextT } from './hooks/useNavContext';

export type NavTargetT = {
  url: string;
  go: () => void;
};

export type NavHandlerT = (
  navContext: NavContextT
) => (...args: any[]) => NavTargetT;

export const getBoundNavFunction = (
  navContext: NavContextT,
  navFnName: string
) => {
  for (const handler of navContext.handlers) {
    if (handler.table[navFnName]) {
      const navTargetFn = handler.table[navFnName](navContext);
      if (navTargetFn) {
        return navTargetFn;
      }
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

export function createNavFunction<
  BoundNavFn extends (...args: any[]) => NavTargetT
>(fnName: string, boundNavFnStub: BoundNavFn) {
  return (navContext: NavContextT) =>
    getBoundNavFunction(navContext, fnName) as BoundNavFn;
}

export const stub = undefined as unknown as NavTargetT;
