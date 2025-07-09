import { createItem, TodoItem, updateItem } from "../domain/todo-item";
import { TodoList } from "../domain/todo-list";

let todoLists: TodoList[] = [];
let listId = 1;
let itemId = 1;

export const getTodoListsByUser = (userId: number): TodoList[] =>
  todoLists.filter((list) => list.userId === userId);

export const createTodoList = (userId: number, name: string): TodoList => {
  const newList: TodoList = { id: listId++, userId, name, items: [] };
  todoLists = [...todoLists, newList];
  return newList;
};

export const getTodoListById = (
  userId: number,
  listId: number
): TodoList | undefined =>
  todoLists.find((l) => l.userId === userId && l.id === listId);

export const addItemToTodoList = (list: TodoList, title: string): TodoItem => {
  const item = createItem(itemId++, title);
  const updatedList = {
    ...list,
    items: [...list.items, item],
  };
  todoLists = todoLists.map((list) =>
    list.id === list.id ? updatedList : list
  );
  return item;
};

export const updateItemInTodoList = (
  list: TodoList,
  itemId: number,
  data: Partial<Omit<TodoItem, "id">>
): TodoItem | null => {
  const item = list.items.find((item) => item.id === itemId);
  if (!item) return null;
  const updatedItem = updateItem(item, data);
  const updatedItems = list.items.map((item) =>
    item.id === itemId ? updatedItem : item
  );
  const updatedList = { ...list, items: updatedItems };
  todoLists = todoLists.map((list) =>
    list.id === list.id ? updatedList : list
  );
  return updatedItem;
};

export const deleteItemFromTodoList = (
  list: TodoList,
  itemId: number
): boolean => {
  if (!list.items.some((item) => item.id === itemId)) return false;
  const updatedList = {
    ...list,
    items: list.items.filter((item) => item.id !== itemId),
  };
  todoLists = todoLists.map((list) =>
    list.id === list.id ? updatedList : list
  );
  return true;
};
