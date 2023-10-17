/*
Just like TodosFilter, the TodoListView is quite simple. It shows all the todos, using the
selection and highlight information that comes from todosState.todosCtr.selection and
todosState.todosCtr.highlight (it accesses these facets through the default properties, so that
the component is not tightly coupled to TodosState).

TodoListView uses a SelectionUIConnector to handle mouse clicks by (de)selecting todos.
It uses createSelectionKeyHandlers and a KeyboardEventHandler to update the selection using
keyboard events.

TodoListView uses isLoading to inspect the resource state of the todos. When you inspect the
code of TodoListViewItem, you will see that it uses the isUpdating function to inspect the
resource state of the todo that it renders. The item will blink if the todo is updating
(this is the case when the todo is being deleted).
*/
import { observer } from 'mobx-react-lite';
import * as R from 'ramda';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { withContextProps } from 'react-props-from-context';
import {
  SelectionUIConnector,
  createSelectionKeyHandlers,
} from 'skandha-facets';
import { TodoT } from '/src/api/types';
import { isLoading } from '/src/resourceStates/getState';
import { TodoListViewItem } from '/src/todos/components';
import { todosCtx } from '/src/todos/hooks/useTodosContext';
import { createKeyDownHandler } from '/src/utils';

// Import styles
import './TodoListView.scss';

export type PropsT = {};

const ContextProps = {
  todos: todosCtx.todos,
  todosSelection: todosCtx.todosSelection,
  todosHighlight: todosCtx.todosHighlight,
};

export const TodoListView = observer(
  withContextProps((props: PropsT & typeof ContextProps) => {
    if (isLoading(props.todos)) {
      return <div>Loading...</div>;
    }

    // This UI connecter creates a mouseclick-handler for
    // each TodoListViewItem.
    const selectionUIConnector = new SelectionUIConnector({
      selection: props.todosSelection,
    });

    // I prefer to handle key-events in a KeyboardEventHandler instead
    // of handling them in the TodoListViewItem.
    const keyHandlers = createSelectionKeyHandlers(props.todosSelection);

    const todoDivs = props.todos.map((todo: TodoT) => (
      <TodoListViewItem
        key={todo.id}
        className={{
          'TodoListViewItem--selected': props.todosSelection.itemIds.includes(
            todo.id
          ),
          'TodoListViewItem--highlighted':
            props.todosHighlight.itemId === todo.id,
        }}
        todo={todo}
        selectionUIProps={selectionUIConnector.handle(todo.id)}
      />
    ));

    return (
      <KeyboardEventHandler
        handleKeys={R.keys(keyHandlers)}
        onKeyEvent={createKeyDownHandler(keyHandlers)}
      >
        <div className="TodoListView" tabIndex={1}>
          {todoDivs}
        </div>
      </KeyboardEventHandler>
    );
  }, ContextProps)
);
