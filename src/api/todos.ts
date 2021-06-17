import { client } from ".";
import { Endpoints } from "./index";
import { Todo } from "./model/todo";

export const getTodos = (params?: any): Promise<Todo[]> => {
  return client
    .get<Todo[]>(Endpoints.TODO, { params: params })
    .then((res) => res.data);
};

export const deleteTodo = (id: number) => {
  return client.delete(Endpoints.TODO).then((res) => res.data);
};
export const putTodo = (todo: Todo) => {
  return client
    .put(`${Endpoints.TODO}/${todo.id}`, todo)
    .then((res) => res.data);
};
export const patchTodo = (todo: Todo) => {
  return client
    .patch(`${Endpoints.TODO}/${todo.id}`, todo)
    .then((res) => res.data);
};
