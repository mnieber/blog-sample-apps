import { observer } from 'mobx-react-lite';
import { withContextProps } from 'react-props-from-context';
import { useParams } from 'react-router-dom';
import { postsCtx } from '/src/posts/hooks/usePostsContext';
import { cn } from '/src/utils/classnames';
import { ObjT } from '/src/utils/types';

// Import styles
import './PostView.scss';

export type PropsT = {
  className?: any;
};

export const ContextProps = {
  posts: postsCtx.posts,
};

export const PostView = observer(
  withContextProps((props: PropsT & typeof ContextProps) => {
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
  }, ContextProps)
);
