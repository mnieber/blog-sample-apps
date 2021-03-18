import { useObservableMutation } from '/src/api/ObservableMutation';
import { queryClient } from '/src/api/queryClient';
import { ObjT } from '/src/utils/types';
import { wait } from '/src/utils/wait';

export type ArgsT = {
  todoIds: string[];
};

export const deleteTodos = (args: ArgsT) => {
  return Promise.resolve({}).then((response: ObjT) => {
    return wait(import.meta.env.DEV ? 2000 : 0, response);
  });
};

export const useDeleteTodos = () => {
  return useObservableMutation({
    mutationFn: deleteTodos,
    onSuccess: (response: ObjT, args: ArgsT) => {
      queryClient.setQueryData(['getTodos'], (data: any) => {
        return {
          todos: data.todos.filter((x: any) => !args.todoIds.includes(x.id)),
        };
      });
    },
  });
};
