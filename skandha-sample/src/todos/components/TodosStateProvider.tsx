/*
The TodosStateProvider calls useTodosState to instantiate the TodosState.
It creates a cache object that exposes the todos property, which is a tracked resource.
This resource is loading when the getTodos query is loading, and updating if the
deleteTodos mutation is running.
Finally, it exposes the contents of TodosState as a set of default properties.

Continue by:
- reading the useTodosState.tsx file.
- reading the TodosState.ts file.
*/

import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { isRunning } from '/src/api/ObservableMutation';
import { isQueryLoading } from '/src/api/ObservableQuery';
import { updateSources } from '/src/resourceStates';
import { TodosContext } from '/src/todos/hooks/useTodosContext';
import { useTodosState } from '/src/todos/hooks/useTodosState';
import { createGetProps } from '/src/utils/createGetProps';
import { useBuilder } from '/src/utils/hooks/useBuilder';

export type PropsT = React.PropsWithChildren<{}>;

export const TodosStateProvider = observer((props: PropsT) => {
  const { todosState, getTodos, deleteTodos } = useTodosState({});

  const cache = useBuilder(() =>
    makeAutoObservable({
      get todos() {
        return updateSources(
          { resource: todosState.todosCtr.data.filteredTodos },
          ['loading', () => isQueryLoading(getTodos), 'getTodos'],
          ['updating', () => isRunning(deleteTodos), 'deleteTodos']
        );
      },
    })
  );

  const getTodosContext = () => {
    return createGetProps({
      todosState: () => todosState,
      todos: () => cache.todos,
      todosDeletion: () => todosState.todosCtr.deletion,
      todosFiltering: () => todosState.todosCtr.filtering,
      todosHighlight: () => todosState.todosCtr.highlight,
      todosSelection: () => todosState.todosCtr.selection,
    });
  };

  return (
    <TodosContext.Provider value={getTodosContext()}>
      {props.children}
    </TodosContext.Provider>
  );
});
