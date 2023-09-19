import { NavContextT } from './hooks/useNavContext';

export type NavTargetT = {
  url: string;
  go: () => void;
};

export type NavHandlerT = (
  navContext: NavContextT
) => (...args: any[]) => NavTargetT;

export const getNavHandler = <NavFn>(
  navContext: NavContextT,
  navFnName: string
): NavFn => {
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
>(fnName: string, boundNavFn: BoundNavFn) {
  return (navContext: NavContextT) =>
    getNavHandler<BoundNavFn>(navContext, fnName);
}

export const stub = undefined as unknown as NavTargetT;
