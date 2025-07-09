export type TodoStatus = "Todo" | "Done";

export type TodoItem = {
  id: number;
  title: string;
  status: TodoStatus;
};

export const createItem = (id: number, title: string): TodoItem => ({
  id,
  title,
  status: "Todo",
});

export const updateItem = (
  item: TodoItem,
  data: Partial<Omit<TodoItem, "id">>
): TodoItem => ({
  ...item,
  ...data,
});
