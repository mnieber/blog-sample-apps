import { useQuery } from '@tanstack/react-query';
import { wait } from '/src/utils/wait';

export const getTodos = () => {
  return Promise.resolve({
    todos: [
      {
        name: 'Fetch water',
        id: '1',
        state: 'done',
      },
      {
        name: 'Chop wood',
        id: '2',
        state: 'not done',
      },
      {
        name: 'Sweep the floor',
        id: '3',
        state: 'done',
      },
      {
        name: 'Clean the windows',
        id: '4',
        state: 'not done',
      },
      {
        name: 'Paint the fence',
        id: '5',
        state: 'done',
      },
      {
        name: 'Make the beds',
        id: '6',
        state: 'not done',
      },
    ],
  }).then((response) => {
    return wait(import.meta.env.DEV ? 1000 : 0, response);
  });
};

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['getTodos'],
    queryFn: () => getTodos(),
  });
};
