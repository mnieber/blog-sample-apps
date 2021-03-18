import * as R from 'ramda';
import { data } from 'skandha';
import { TodoT } from '/src/api/types';

export class TodosData {
  static className = () => 'TodosData';

  @data todos: TodoT[] = [];
  @data filteredTodos: TodoT[] = [];

  @data get todoById() {
    return R.indexBy(R.prop('id'), this.todos);
  }
}
