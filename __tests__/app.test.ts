import request from "supertest";
import app from "../src/core/server";

describe("Express App", () => {
  it('should respond with "Hello, World!" on the home endpoint', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
