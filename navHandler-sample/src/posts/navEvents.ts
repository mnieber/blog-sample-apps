import { getNavFn, type NavContextT } from '/src/navHandler';

export const navToPosts = (navContext: NavContextT): void =>
  getNavFn(navContext, 'navToPosts', navToPosts)(navContext);

export const navToPost = (navContext: NavContextT, postId: string): void =>
  getNavFn(navContext, 'navToPost', navToPost)(navContext, postId);
