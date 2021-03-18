/*
In this file we see how the "TodosState" is provided by the TodosStateProvider.
The TodosFilter, TodoListView and DeleteTodosButton will consume the provided state
by using the default properties that TodosStateProvider provides.

Continue by:
- reading the TodosStateProvider.tsx file.
- reading the TodosFilter.tsx, TodoListView.tsx and DeleteTodosButton.tsx files.
*/

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '/src/api/queryClient';
import { TodoListView } from '/src/todos/components';
import { DeleteTodosButton } from '/src/todos/components/DeleteTodosButton';
import { TodosFilter } from '/src/todos/components/TodosFilter';
import { TodosStateProvider } from '/src/todos/components/TodosStateProvider';
import { cn } from '/src/utils/classnames';

// Import styles
import './App.scss';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodosStateProvider>
        <div className={cn('App')}>
          <div className={cn('App__Body', 'flex flex-col items-center')}>
            <div className={cn('App__Notes', 'my-8', 'p-6')}>
              <div className={cn('text-2xl font-bold mb-2')}>Notes:</div>
              <div>
                - The source code is annotated. Start by reading main.tsx;
              </div>
              <div>
                - The Skandha log is shown in the debug console of the browser;
              </div>
              <div>- The highlighted item is shown in red;</div>
              <div>
                - When you toggle the filter, the highlight is corrected;
              </div>
              <div>
                - Try selecting a range with the filter enabled, and then
                disable the filter.
              </div>
            </div>
            <TodosFilter />
            <TodoListView />
            <DeleteTodosButton className="mt-8" />
          </div>
        </div>
      </TodosStateProvider>
    </QueryClientProvider>
  );
};
