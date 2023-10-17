/*
Just like TodosFilter, the DeleteTodosButton is quite simple. It calls the delete method of
todosDeletion, passing the ids of the selected todos.
*/

import { observer } from 'mobx-react-lite';
import { withContextProps } from 'react-props-from-context';
import { isUpdating } from '/src/resourceStates/getState';
import { todosCtx } from '/src/todos/hooks/useTodosContext';
import { cn } from '/src/utils/classnames';

// Import styles
import './DeleteTodosButton.scss';

export type PropsT = {
  className?: any;
};

export const ContextProps = {
  todos: todosCtx.todos,
  todosDeletion: todosCtx.todosDeletion,
  todosSelection: todosCtx.todosSelection,
};

export const DeleteTodosButton = observer(
  withContextProps((props: PropsT & typeof ContextProps) => {
    const disabled =
      props.todosSelection.itemIds.length === 0 || isUpdating(props.todos);

    return (
      <button
        disabled={disabled}
        className={cn(
          'DeleteTodosButton',
          'my-4',
          {
            'DeleteTodosButton--enabled': !disabled,
            'DeleteTodosButton--disabled': disabled,
          },
          props.className
        )}
        onClick={() =>
          props.todosDeletion.delete({ itemIds: props.todosSelection.itemIds })
        }
      >
        Delete selected todos
      </button>
    );
  }, ContextProps)
);
