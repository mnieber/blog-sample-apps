import * as R from 'ramda';
import { data } from 'skandha';
import { registerCtr } from 'skandha-mobx';
import { PostT } from '/src/api/types';

class PostsData {
  static className = () => 'PostsData';

  @data posts: PostT[] = [];
  @data get postById() {
    return R.indexBy(R.prop('id'), this.posts);
  }
}

export class PostsState {
  postsCtr = {
    data: new PostsData(),
  };
  archivedPostsCtr = {
    data: new PostsData(),
  };

  constructor() {
    registerCtr({
      ctr: this.postsCtr,
      options: { name: 'PostsState.Posts' },
      initCtr: () => {},
    });
    registerCtr({
      ctr: this.archivedPostsCtr,
      options: { name: 'PostsState.ArchivedPosts' },
      initCtr: () => {},
    });
  }
}
