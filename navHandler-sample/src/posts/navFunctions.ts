import { createNavFunction, stub } from '/src/navHandler';

export const navToPost = createNavFunction(
  'navToPost',
  (postId: string) => stub
);
