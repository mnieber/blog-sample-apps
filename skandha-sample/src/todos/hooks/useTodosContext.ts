import * as R from 'ramda';
import React from 'react';
import { Deletion, Filtering, Highlight, Selection } from 'skandha-facets';
import { TodoT } from '/src/api/types';
import { TodosState } from '/src/todos/TodosState';

export const TodosContext = React.createContext<any>(null);

export const useTodosContext = () => {
  const context = React.useContext(TodosContext);
  if (!context) {
    throw new Error(
      'useTodosContext must be used within a TodosContext.Provider'
    );
  }
  return context;
};

export const todosCtx = R.mergeAll([
  {
    todosState: [useTodosContext, 'todosState'] as any as TodosState,
    todos: [useTodosContext, 'todos'] as any as TodoT[],
    todosDeletion: [useTodosContext, 'todosDeletion'] as any as Deletion,
    todosFiltering: [useTodosContext, 'todosFiltering'] as any as Filtering,
    todosHighlight: [useTodosContext, 'todosHighlight'] as any as Highlight,
    todosSelection: [useTodosContext, 'todosSelection'] as any as Selection,
  },
]);
