import { getNavFn, type NavContextT, type NavT } from '/src/navHandler';

export const nav = (x: NavT) => x.ufn(x.path);

export const toPost = (navContext: NavContextT, postId: string) => {
  return getNavFn(navContext, 'toPost', toPost)(navContext, postId);
};

export const toPosts = (navContext: NavContextT) => {
  return getNavFn(navContext, 'toPosts', toPosts)(navContext);
};
