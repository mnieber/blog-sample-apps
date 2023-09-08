import { observer } from 'mobx-react-lite';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { RouterLink } from '/src/routes/components/RouterLink';
import { getRoutes } from '/src/routes/routeTable';
import { getRouteMatch } from '/src/routes/utils/getRouteMatch';
import { cn } from '/src/utils/classnames';

// Import styles
import './NavBar.scss';

export type PropsT = {
  className?: any;
};

export const NavBar = observer((props: PropsT) => {
  const routes = getRoutes<PostsRoutesT>();
  const currentRoute = getRouteMatch()?.path;

  return (
    <div className={cn('NavBar', 'flex flex-row', props.className)}>
      <RouterLink
        to={routes.posts()}
        className={cn(
          'NavBar__Link',
          { 'NavBar__Link--active': currentRoute?.startsWith(routes.posts()) },
          'mx-4'
        )}
      >
        Posts
      </RouterLink>
      <RouterLink
        to={routes.archivedPosts()}
        className={cn(
          'NavBar__Link',
          {
            'NavBar__Link--active': currentRoute?.startsWith(
              routes.archivedPosts()
            ),
          },
          'mx-4'
        )}
      >
        Archive
      </RouterLink>
    </div>
  );
});
