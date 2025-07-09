import { TodoItem } from "./todo-item";

export type TodoList = {
  id: number;
  userId: number;
  name: string;
  items: TodoItem[];
};
