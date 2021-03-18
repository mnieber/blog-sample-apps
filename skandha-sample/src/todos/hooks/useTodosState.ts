/*
The useTodosState function is a hook that creates the TodosState.
It creates a ObservableQuery (getTodos) and an ObservableMutation (deleteTodos).
When it creates the TodosState, it implements the getTodos and deleteTodos methods that
connect the TodosState to the "outside world".
The trackPromise function is used to put the selected todo's in an "updating" state while
the deleteTodos mutation is in progress.

You can continue by:

- diving into the details (e.g. useGraftResourceStatesFromMemo, or trackPromise), or
- returning to TodosStateProvider.tsx.

On a first reading, it's probably best to return to TodosStateProvider.tsx.
*/

import React from 'react';
import { useDeleteTodos } from '/src/api/endpoints';
import { useObservableQuery } from '/src/api/hooks';
import { DeleteTodosArgsT } from '/src/api/mutations';
import { useGetTodos } from '/src/api/queries/useGetTodos';
import { TodoT } from '/src/api/types';
import { trackPromise } from '/src/resourceStates/trackPromise';
import { TodosState } from '/src/todos/TodosState';
import { useBuilder } from '/src/utils/hooks/useBuilder';
import { useGraftResourceStatesFromMemo } from '/src/utils/hooks/useGraftResourceStatesFromMemo';
import { lookUp } from '/src/utils/ids';

export type PropsT = {};

export const useTodosState = (props: PropsT) => {
  const graftResourceStatesFromMemo = useGraftResourceStatesFromMemo({});

  // Mutations
  const deleteTodos = useDeleteTodos();

  // Queries
  const getTodos = useObservableQuery(useGetTodos(), {
    fetchAsLoad: true,
    debugLabel: 'getTodos',
  });

  const todosState = useBuilder(() => {
    const state = new TodosState({
      //
      getTodos: () => {
        return graftResourceStatesFromMemo({
          resources: getTodos.data?.todos ?? [],
        });
      },
      //
      deleteTodos: (ids: string[]) => {
        const todos = lookUp(ids, todosState.todosCtr.data.todoById);
        return trackPromise({
          name: 'deleteTodos',
          states: { updating: todos },
          promise: deleteTodos.mutateAsync({
            todoIds: ids,
          } as DeleteTodosArgsT),
        }).result;
      },
    });

    // Initialize state.todosCtr.filtering
    state.todosCtr.filtering.apply({
      filter: (todos: TodoT[]) => {
        return todos.filter((x: TodoT) => x.state === 'done');
      },
    });
    state.todosCtr.filtering.setEnabled({ flag: false });

    return state;
  }) as TodosState;

  React.useEffect(() => () => todosState.destroy(), [todosState]);

  return {
    todosState,
    getTodos,
    deleteTodos,
  };
};
