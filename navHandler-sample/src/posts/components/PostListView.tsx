import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import { PostT } from '/src/api/types';
import { useNavContext } from '/src/navHandler';
import { PostListViewItem } from '/src/posts/components';
import { navToPost } from '/src/posts/navTargets';
import { cn } from '/src/utils/classnames';

// Import styles
import './PostListView.scss';

export type PropsT = {
  className?: any;
};

export const DefaultProps = {
  posts: [] as PostT[],
};

export const PostListView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const navContext = useNavContext('PostListView');

    const postDivs = props.posts.map((post) => {
      const navTarget = navToPost(navContext)(post.id);
      return (
        <PostListViewItem
          key={post.id}
          post={post}
          url={navTarget.url}
          onClick={() => navTarget.go()}
        />
      );
    });

    return (
      <div
        className={cn(
          'PostListView',
          'flex flex-col',
          'mx-auto',
          props.className
        )}
        tabIndex={1}
      >
        {postDivs}
      </div>
    );
  }, DefaultProps)
);
