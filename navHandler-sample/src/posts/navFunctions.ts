import { createNavFunction, stubNavTarget } from '/src/navHandler';

export const toPost = createNavFunction(
  'toPost',
  (postId: string) => stubNavTarget
);
