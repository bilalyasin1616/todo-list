import { TodoItem } from "../domain/todo-item";
import {
  TodoList,
  createTodoList,
  addItem,
  updateItemInList,
  deleteItem,
} from "../domain/todo-list";

let todoLists: TodoList[] = [];
let listId = 1;
let itemId = 1;

export const getTodoListsByUser = (userId: number): TodoList[] =>
  todoLists.filter((list) => list.userId === userId);

export const createAndStoreTodoList = (
  userId: number,
  name: string
): TodoList => {
  const newList = createTodoList(listId++, userId, name);
  todoLists = [...todoLists, newList];
  return newList;
};

export const getTodoListById = (
  userId: number,
  id: number
): TodoList | undefined =>
  todoLists.find((list) => list.userId === userId && list.id === id);

export const addItemToTodoList = (list: TodoList, title: string): TodoItem => {
  const [updatedList, newItem] = addItem(list, itemId++, title);
  todoLists = todoLists.map((l) => (l.id === list.id ? updatedList : l));
  return newItem;
};

export const updateItemInTodoList = (
  list: TodoList,
  itemId: number,
  patch: Partial<Omit<TodoItem, "id">>
): TodoItem | null => {
  const result = updateItemInList(list, itemId, patch);
  if (!result) return null;
  const [updatedList, updatedItem] = result;
  todoLists = todoLists.map((l) => (l.id === list.id ? updatedList : l));
  return updatedItem;
};

export const deleteItemFromTodoList = (
  list: TodoList,
  itemId: number
): boolean => {
  const [updatedList, didExist] = deleteItem(list, itemId);
  if (!didExist) return false;
  todoLists = todoLists.map((l) => (l.id === list.id ? updatedList : l));
  return true;
};
