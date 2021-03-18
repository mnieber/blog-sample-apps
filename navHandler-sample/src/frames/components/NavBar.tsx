import { observer } from 'mobx-react-lite';
import { navHandler } from '/src/navHandler/NavHandler';
import { RouterLink } from '/src/routes/components/RouterLink';
import { useRoutes } from '/src/routes/hooks';
import { cn } from '/src/utils/classnames';

// Import styles
import './NavBar.scss';

export type PropsT = {
  className?: any;
};

export const NavBar = observer((props: PropsT) => {
  const routes = useRoutes();
  const currentRoute = navHandler.getRouteMatch()?.path;

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
