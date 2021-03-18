import { observer } from 'mobx-react-lite';
import { stub, withDefaultProps } from 'react-default-props-context';
import { useParams } from 'react-router-dom';
import { PostT } from '/src/api/types';
import { cn } from '/src/utils/classnames';
import { ObjT } from '/src/utils/types';

// Import styles
import './PostView.scss';

export type PropsT = {
  className?: any;
};

export const DefaultProps = {
  posts: stub as PostT[],
};

export const PostView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const params = useParams() as ObjT;
    const post = props.posts.find((post) => post.id === params.postId);
    return (
      <div className={cn('PostView', 'max-w-[800px]', props.className)}>
        <div className={cn('PostView__Title')}>
          {post?.name ?? 'Post not found'}
        </div>
        <div className={cn('PostView__Body')}>
          {post?.body ?? 'Post not found'}
        </div>
      </div>
    );
  }, DefaultProps)
);
