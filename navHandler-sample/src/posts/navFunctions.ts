import { createNavFunction, stubNavTarget } from '/src/navHandler';

export const navToPost = createNavFunction(
  'navToPost',
  (postId: string) => stubNavTarget
);
