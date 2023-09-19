import { createNavFunction, stub } from '/src/navHandler/getNavHandler';

export const navToPost = createNavFunction(
  'navToPost',
  (postId: string) => stub
);
