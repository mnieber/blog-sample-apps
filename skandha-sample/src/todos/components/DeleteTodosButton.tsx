/*
Just like TodosFilter, the DeleteTodosButton is quite simple. It calls the delete method of
todosDeletion, passing the ids of the selected todos.
*/

import { observer } from 'mobx-react-lite';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { isUpdating } from '/src/resourceStates/getState';
import { cn } from '/src/utils/classnames';

// Import styles
import './DeleteTodosButton.scss';

export type PropsT = {
  className?: any;
};

export const DefaultProps = {
  ...dps.todos,
  ...dps.todosDeletion,
  ...dps.todosSelection,
};

export const DeleteTodosButton = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
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
  }, DefaultProps)
);
