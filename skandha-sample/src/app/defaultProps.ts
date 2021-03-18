import { stub, withDefaultProps } from 'react-default-props-context';
import { Deletion, Highlight, Selection } from 'skandha-facets';
import { Filtering } from 'skandha-facets/facets/Filtering';
import { TodoT } from '/src/api/types';
import { TodosState } from '/src/todos/TodosState';
export { stub, withDefaultProps } from 'react-default-props-context';

// This is a workaround for a bug in webpack
!withDefaultProps && (console as any).log(withDefaultProps);

const dpsStates = {
  todosState: {
    todosState: stub as TodosState,
  },
};

const dpsTodos = {
  todos: {
    todos: stub as TodoT[],
  },
  todosDeletion: {
    todosDeletion: stub as Deletion,
  },
  todosFiltering: {
    todosFiltering: stub as Filtering,
  },
  todosHighlight: {
    todosHighlight: stub as Highlight,
  },
  todosSelection: {
    todosSelection: stub as Selection,
  },
};

export const defaultProps = {
  ...dpsTodos,
  ...dpsStates,
};

export const dps = defaultProps;
