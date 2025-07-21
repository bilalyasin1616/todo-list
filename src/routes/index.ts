import { Router } from "express";
import {
  addItemToTodoList,
  createAndStoreTodoList,
  deleteItemFromTodoList,
  getTodoListById,
  getTodoListsByUser,
  updateItemInTodoList,
} from "../store";

const router = Router();

const X_USER_ID_HEADER = "x-user-id";

router.use((req, _, next) => {
  req.userId = Number(req.headers[X_USER_ID_HEADER]);
  next();
});

router.use((req, res, next) => {
  if (!req.userId)
    return res.status(401).json({
      error: `Missing User ID, make sure to pass: '${X_USER_ID_HEADER}' header`,
    });
  next();
});

router.get("/", (req, res) => {
  res.json(getTodoListsByUser(req.userId));
});

router.post("/", (req, res) => {
  const name = req.body.name;
  if (typeof name !== "string") {
    return res.status(400).json({ error: "Name must be a string" });
  }
  const list = createAndStoreTodoList(req.userId, name);
  res.status(201).json(list);
});

router.get("/:listId", (req, res) => {
  const list = getTodoListById(req.userId, +req.params.listId);
  if (!list) return res.status(404).json({ error: "List not found" });
  res.json(list);
});

router.post("/:listId/item", (req, res) => {
  const list = getTodoListById(req.userId, +req.params.listId);
  if (!list) return res.status(404).json({ error: "List not found" });
  const { title } = req.body;
  if (typeof title !== "string")
    return res.status(400).json({ error: "Title must be a string" });
  const item = addItemToTodoList(list, title);
  res.status(201).json(item);
});

router.put("/:listId/item/:itemId", (req, res) => {
  const list = getTodoListById(req.userId, +req.params.listId);
  if (!list) return res.status(404).json({ error: "List not found" });
  const updated = updateItemInTodoList(list, +req.params.itemId, req.body);
  if (!updated) return res.status(404).json({ error: "Item not found" });
  res.json(updated);
});

router.delete("/:listId/item/:itemId", (req, res) => {
  const list = getTodoListById(req.userId, +req.params.listId);
  if (!list) return res.status(404).json({ error: "List not found" });
  const ok = deleteItemFromTodoList(list, +req.params.itemId);
  if (!ok) return res.status(404).json({ error: "Item not found" });
  res.status(204).end();
});

export default router;
