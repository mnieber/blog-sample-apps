import { runInAction } from 'mobx';
import { getPosts } from '/src/api/queries/getPosts';
import { PostsState } from '/src/posts/PostsState';

// For simplicity, I'm creating the PostsState instance as a singleton.

export const createPostsState = () => {
  const state = new PostsState();
  return state;
};

export const postsState = createPostsState();

const data = getPosts();
runInAction(() => {
  postsState.postsCtr.data.posts = data.posts;
  postsState.archivedPostsCtr.data.posts = data.archivedPosts;
});

export const getPostsState = () => postsState;
