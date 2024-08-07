const request = require("supertest");
const app = require("../server");
const { connectToDb, closeDb, getDb } = require("../utils/database");

jest.setTimeout(30000);

beforeAll(async () => {
  await connectToDb();
  const db = getDb();
  await db.collection("users").deleteMany({ email: "testuser@example.com" });
});

afterAll(async () => {
  await closeDb();
});

afterEach(async () => {
  const db = getDb();
  await db.collection("users").deleteMany({ email: "testuser@example.com" });
});

describe("Auth Routes", () => {
  test("should sign up a new user", async () => {
    const response = await request(app).post("/api/auth/signup").send({
      email: "testuser@example.com",
      password: "password",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("email", "testuser@example.com");
    expect(response.body).toHaveProperty("token");
  });

  test("should not sign up an existing user", async () => {
    await request(app).post("/api/auth/signup").send({
      email: "testuser@example.com",
      password: "password",
    });

    const response = await request(app).post("/api/auth/signup").send({
      email: "testuser@example.com",
      password: "password",
    });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error");
  });

  test("should not sign up a user with missing fields", async () => {
    const response = await request(app).post("/api/auth/signup").send({
      email: "testuser@example.com",
    });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error");
  });

  test("should login valid existing user", async () => {
    await request(app).post("/api/auth/signup").send({
      email: "testuser@example.com",
      password: "password",
    });

    const response = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "password",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("email", "testuser@example.com");
    expect(response.body).toHaveProperty("token");
  });

  test("should not login invalid user", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "testuser@example.com",
      password: "wrongpassword",
    });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error");
  });
});
