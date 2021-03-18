/*
In this file nothing special happens.

Continue by:
- reading the UrlRouter.tsx file.
*/

import { Router } from 'react-router-dom';
import { history } from '/src/navHandler/NavHandler';
import { UrlRouter } from '/src/routes/components/UrlRouter';
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
              - Depending on the current url, PostsNavPage or
              ArchivedPostsNavPage is mounted;
            </div>
            <div>
              - When a post is clicked then PostListView calls navToPost;
            </div>
            <div>
              - The navHandler handles "navToPost" by navigating to
              /posts/:postId or /archived-posts/:postId.
            </div>
          </div>
          <UrlRouter />
        </div>
      </div>
    </Router>
  );
};
