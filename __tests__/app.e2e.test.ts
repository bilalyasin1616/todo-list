import request from "supertest";

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}/api`;
const HEADERS = { "x-user-id": "1" };

describe("Todo E2E", () => {
  let listId: number;
  let itemId: number;

  it("should create a todo list", async () => {
    const res = await request(BASE_URL)
      .post("/todo")
      .set(HEADERS)
      .send({ name: "E2E List" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    listId = res.body.id;
  });

  it("should add item to the list", async () => {
    const res = await request(BASE_URL)
      .post(`/todo/${listId}/item`)
      .set(HEADERS)
      .send({ title: "Test Task" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test Task");
    itemId = res.body.id;
  });

  it("should edit the item", async () => {
    const res = await request(BASE_URL)
      .put(`/todo/${listId}/item/${itemId}`)
      .set(HEADERS)
      .send({ title: "Updated Task", status: "Done" });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Updated Task");
    expect(res.body.status).toBe("Done");
  });

  it("should fetch the list with updated item", async () => {
    const res = await request(BASE_URL).get(`/todo/${listId}`).set(HEADERS);

    expect(res.status).toBe(200);
    const item = res.body.items.find((i: any) => i.id === itemId);
    expect(item.title).toBe("Updated Task");
    expect(item.status).toBe("Done");
  });

  it("should delete the item", async () => {
    const res = await request(BASE_URL)
      .delete(`/todo/${listId}/item/${itemId}`)
      .set(HEADERS);

    expect(res.status).toBe(204);
  });
});
