/*
The TodosState class has a todosCtr container with a data facet (that contains the todos)
and deletion, filtering, highlight and selection facets (these are reusable behaviours).

The TodosState class has properties that connect the state to the outside world (e.g. getTodos).

The registerTodosCtr function registers the todosCtr container with the TodosState. When the
todosCtr is registered, it can bind to the properties of the TodosState (e.g. this allows the
todosCtr.deletion facet to call the deleteTodos property of the TodosState).

You can continue by:

- reading the registerTodosCtr.ts file.
*/

import * as Skandha from 'skandha';
import { Deletion, Filtering, Highlight, Selection } from 'skandha-facets';
import { TodoT } from '/src/api/types';
import { registerTodosCtr } from '/src/todos/TodosState/registerTodosCtr';
import { TodosData } from '/src/todos/facets/TodosData';

export type PropsT = {
  getTodos: () => TodoT[];
  deleteTodos: (ids: string[]) => Promise<any>;
};

export class TodosState {
  props: PropsT;

  todosCtr = {
    data: new TodosData(),
    deletion: new Deletion(),
    filtering: new Filtering(),
    highlight: new Highlight<TodoT>(),
    selection: new Selection<TodoT>(),
  };

  destroy() {
    Skandha.cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    this.props = props;
    registerTodosCtr(this);
  }
}
