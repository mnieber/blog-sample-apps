import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './PostListViewItem.scss';
import { PostT } from '/src/api/types';

export type PropsT = {
  post: PostT;
  url: string;
  onClick?: () => void;
  className?: any;
};

export const PostListViewItem: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <a
      className={classnames('PostListViewItem', props.className)}
      href={props.url}
      onClick={(e) => {
        e.preventDefault();
        if (props.onClick) props.onClick();
      }}
    >
      {props.post.name}
    </a>
  );
});
