import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import { PostT } from '/src/api/types';
import { useNavContext } from '/src/navHandler';
import { PostListViewItem } from '/src/posts/components';
import { toPost } from '/src/posts/navFunctions';
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
      // Here, we obtain a navTarget that contains both the target url
      // and the nav() function that navigates to that url. We can also
      // call navContext.url(toPost)(post.id) to obtain the url, and
      // call navContext.nav(toPost)(post.id) to navigate. In this case, since
      // we need both the url and the nav function, we use navTarget.
      const navTarget = navContext.navTarget(toPost)(post.id);
      return (
        <PostListViewItem
          key={post.id}
          post={post}
          url={navTarget.url}
          onClick={() => navTarget.nav()}
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
