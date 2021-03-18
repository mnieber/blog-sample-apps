import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { selectionUIHandlers, SelectionUIPropsT } from 'skandha-facets';
import './TodoListViewItem.scss';
import { TodoT } from '/src/api/types';
import { isUpdating } from '/src/resourceStates/getState';

export type PropsT = {
  todo: TodoT;
  className?: any;
  selectionUIProps: SelectionUIPropsT;
};

export const TodoListViewItem: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div
      className={classnames(
        'TodoListViewItem',
        { 'animate-delete': isUpdating(props.todo) },
        props.className
      )}
      {...selectionUIHandlers(props.selectionUIProps)}
    >
      {props.todo.name}
      {props.todo.state === 'done' ? ' ✔️' : ''}
    </div>
  );
});
