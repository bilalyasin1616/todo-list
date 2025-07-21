import { TodoItem, createItem, updateItem } from "./todo-item";

export type TodoList = {
  id: number;
  userId: number;
  name: string;
  items: TodoItem[];
};

export const createTodoList = (
  id: number,
  userId: number,
  name: string
): TodoList => ({
  id,
  userId,
  name,
  items: [],
});

export const addItem = (
  list: TodoList,
  itemId: number,
  title: string
): [TodoList, TodoItem] => {
  const item = createItem(itemId, title);
  const updatedList = {
    ...list,
    items: [...list.items, item],
  };
  return [updatedList, item];
};

export const updateItemInList = (
  list: TodoList,
  itemId: number,
  patch: Partial<Omit<TodoItem, "id">>
): [TodoList, TodoItem] | null => {
  const item = list.items.find((i) => i.id === itemId);
  if (!item) return null;
  const updatedItem = updateItem(item, patch);
  const updatedItems = list.items.map((i) =>
    i.id === itemId ? updatedItem : i
  );
  const updatedList = { ...list, items: updatedItems };
  return [updatedList, updatedItem];
};

export const deleteItem = (
  list: TodoList,
  itemId: number
): [TodoList, boolean] => {
  const exists = list.items.some((i) => i.id === itemId);
  const updatedList = {
    ...list,
    items: list.items.filter((i) => i.id !== itemId),
  };
  return [updatedList, exists];
};
