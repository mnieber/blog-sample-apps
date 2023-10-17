/*
The TodosFilter is very simple. It only toggles the value of todosFiltering.isEnabled.

Note that because we are using MobX, and because the Skandha facets are made observable with
the registerCtr function from skandha-mobx, the component will update automatically when
the value of todosFiltering.isEnabled changes.
*/

import { observer } from 'mobx-react-lite';
import { withContextProps } from 'react-props-from-context';
import { todosCtx } from '/src/todos/hooks/useTodosContext';
import { cn } from '/src/utils/classnames';

// Import styles
import './TodosFilter.scss';

export type PropsT = {
  className?: any;
};

export const ContextProps = {
  todosFiltering: todosCtx.todosFiltering,
};

export const TodosFilter = observer(
  withContextProps((props: PropsT & typeof ContextProps) => {
    const toggleFilter = () =>
      props.todosFiltering.setEnabled({
        flag: !props.todosFiltering.isEnabled,
      });

    return (
      <div className={cn('TodosFilter', 'flex flex-row items-center')}>
        <input
          className={cn('TodoListView__FilterCheckbox', 'mr-3')}
          type="checkbox"
          checked={props.todosFiltering.isEnabled}
          onChange={() => toggleFilter()}
        />
        <div className="my-4 cursor-pointer" onClick={() => toggleFilter()}>
          Only show completed todos
        </div>
      </div>
    );
  }, ContextProps)
);
