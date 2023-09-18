import {
  getNavHandler,
  type NavContextT,
  type NavTargetT,
} from '/src/navHandler';

export const navToPost = (
  navContext: NavContextT,
  postId: string
): NavTargetT => {
  return getNavHandler(navContext, 'navToPost', navToPost)(navContext, postId);
};
