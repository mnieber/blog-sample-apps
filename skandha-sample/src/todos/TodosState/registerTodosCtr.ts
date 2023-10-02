/*
The registerTodosCtr function registers the todosCtr container with the TodosState:

- It calls mapData to connect the inputs and outputs of each facet. For example, the filteredTodos
output of the data facet is connected to the selectableIds input of the selection);
- It calls setCallbacks to implement the callbacks of each facet. For example, the deleteItems callback
of deletion.delete is implemented by calling the deleteTodos property of the TodosState.

The setCallbacks function is also used to create interactions between the behaviours. For example,
when the filter is enabled, the highlight is corrected.

Note that because we are using the registerCtr function from skandha-mobx (instead of using the one
from skandha) the facets in todosCtr are observable with MobX.
*/

import { Cbs } from 'aspiration';
import * as R from 'ramda';
import { mapDataToProps } from 'skandha';
import { Deletion, Selection, handleSelectItem } from 'skandha-facets';
import { correctHighlight } from 'skandha-facets/policies';
import { registerCtr } from 'skandha-mobx';
import { TodoT } from '/src/api/types';
import { TodosState } from '/src/todos/TodosState';

const mapData = (state: TodosState) => {
  const ctr = state.todosCtr;
  const getTodoById = (x: string) => ctr.data.todoById[x];

  mapDataToProps(ctr, {
    // The inputs for 'filtering' is the list of the todos.
    filtering: {
      inputItems: () => ctr.data.todos,
    },
    // We set the output of 'filtering' to 'data.filteredTodos'.
    data: {
      todos: () => state.props.getTodos(),
      filteredTodos: () => ctr.filtering.filteredItems,
    },
    // The filtered todos can be selected.
    selection: {
      selectableIds: () => R.map(R.prop('id'), ctr.data.filteredTodos),
    },
    // We look up the highlighted item by 'highlight.itemId'.
    highlight: {
      item: () =>
        ctr.highlight.itemId ? getTodoById(ctr.highlight.itemId) : undefined,
    },
  });
};

const setCallbacks = (state: TodosState) => {
  const ctr = state.todosCtr;

  ctr.deletion.callbackMap = {
    delete: {
      deleteItems(this: Cbs<Deletion['delete']>) {
        return state.props.deleteTodos(this.args.itemIds);
      },
    },
  };

  ctr.selection.callbackMap = {
    // Here we implement the callbacks of the Selection.selectItem function.
    selectItem: {
      // Implement the 'selectItem' callback.
      selectItem(this: Cbs<Selection['selectItem']>) {
        // Perform the selection
        handleSelectItem(ctr.selection, this.args);
        // Apply the policy that highlight follows selection
        if (!this.args.isCtrl && !this.args.isShift) {
          ctr.highlight.set({ itemId: this.args.itemId });
        }
      },
    },
  };

  ctr.filtering.callbackMap = {
    // Here we implement the callbacks of the Filtering.setEnabled function.
    setEnabled: {
      // Implement the 'exit' callback. This is a special callback that is
      // called automatically when the Filtering.setEnabled function exits.
      exit() {
        // When exiting 'setEnabled' we make a correction to the highlight
        // if it points to an item that is filtered out.
        correctHighlight(
          ctr.highlight,
          (ctr.filtering.inputItems ?? []).map((x: TodoT) => x.id),
          ctr.filtering.filteredItems.map((x: TodoT) => x.id)
        );
      },
    },
  };
};

export const registerTodosCtr = (state: TodosState) => {
  registerCtr({
    ctr: state.todosCtr,
    options: { name: 'TodosState.Todos' },
    initCtr: () => {
      mapData(state);
      setCallbacks(state);
    },
  });
};
