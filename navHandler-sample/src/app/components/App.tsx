/*
In this file nothing special happens.

Continue by:
- reading the UrlRouter.tsx file.
*/

import { Router } from 'react-router-dom';
import { UrlRouter } from '/src/routes/components/UrlRouter';
import { history } from '/src/routes/history';
import { cn } from '/src/utils/classnames';

// Import styles
import './App.scss';

export const App = () => {
  return (
    <Router history={history}>
      <div className={cn('App')}>
        <div className={cn('App__Body', 'flex flex-col items-center')}>
          <div className={cn('App__Notes', 'my-8', 'p-6')}>
            <div className={cn('text-2xl font-bold mb-2')}>Notes:</div>
            <div>
              - The source code is annotated. Start by reading main.tsx;
            </div>
            <div>
              - PostListView calls navContext = useNavContext("PostListView") to
              obtain a navigation context from all enclosing
              NavHandlersProviders. Here, "PostListView" is the requester id;
            </div>
            <div>
              - When a post is clicked then PostListView calls
              toPost(navContext)(postId).nav();
            </div>
            <div>
              - This will use getBoundNavFunction(navContext, "toPost") to
              return the "toPost" navigation function from either
              PostsNavHandler or ArchivedPostsNavHandler;
            </div>
          </div>
          <UrlRouter />
        </div>
      </div>
    </Router>
  );
};
