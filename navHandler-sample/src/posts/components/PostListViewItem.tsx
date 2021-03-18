import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './PostListViewItem.scss';
import { PostT } from '/src/api/types';

export type PropsT = {
  post: PostT;
  onClick?: () => void;
  className?: any;
};

export const PostListViewItem: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div
      className={classnames('PostListViewItem', props.className)}
      onClick={props.onClick}
    >
      {props.post.name}
    </div>
  );
});
