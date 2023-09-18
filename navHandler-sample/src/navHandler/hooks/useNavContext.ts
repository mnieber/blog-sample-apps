import * as React from 'react';
import {
  NavHandlersContext,
  type NavHandlerT,
} from '../components/NavHandlersProvider';
import { type NavTargetT } from '../getNavHandler';

export type NavContextT = {
  requesterId: string;
  handlers: NavHandlerT[];
};

export const useNavContext = (requesterId: string) => {
  const handlers: NavHandlerT[] = React.useContext(NavHandlersContext);
  return { requesterId, handlers };
};

export const createNavTarget = (url: string, ufn: Function): NavTargetT => {
  return { url, go: () => ufn(url) };
};
