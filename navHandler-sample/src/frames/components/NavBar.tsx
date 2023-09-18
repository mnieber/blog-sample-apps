import { observer } from 'mobx-react-lite';
import type { RoutesT as PostsRoutesT } from '/src/posts/routeTable';
import { RouterLink } from '/src/routes/components/RouterLink';
import { getRouteFns } from '/src/routes/routeTable';
import { getRouteMatch } from '/src/routes/utils/getRouteMatch';
import { cn } from '/src/utils/classnames';

// Import styles
import './NavBar.scss';

export type PropsT = {
  className?: any;
};

export const NavBar = observer((props: PropsT) => {
  const routeFns = getRouteFns<PostsRoutesT>();
  const currentRoute = getRouteMatch()?.path;

  return (
    <div className={cn('NavBar', 'flex flex-row', props.className)}>
      <RouterLink
        to={routeFns.posts()}
        className={cn(
          'NavBar__Link',
          {
            'NavBar__Link--active': currentRoute?.startsWith(routeFns.posts()),
          },
          'mx-4'
        )}
      >
        Posts
      </RouterLink>
      <RouterLink
        to={routeFns.archivedPosts()}
        className={cn(
          'NavBar__Link',
          {
            'NavBar__Link--active': currentRoute?.startsWith(
              routeFns.archivedPosts()
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
