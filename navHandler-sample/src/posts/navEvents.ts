import { navHandler } from '/src/navHandler/NavHandler';

export const navToPosts = (): void =>
  navHandler.getNavFn('navToPosts', navToPosts)();

export const navToPost = (postId: string): void =>
  navHandler.getNavFn('navToPost', navToPost)(postId);
