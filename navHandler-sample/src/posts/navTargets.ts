import {
  getNavTarget,
  type NavContextT,
  type NavTargetT,
} from '/src/navHandler';

export const navToPost = (
  navContext: NavContextT,
  postId: string
): NavTargetT => {
  return getNavTarget(navContext, 'navToPost', navToPost)(navContext, postId);
};
