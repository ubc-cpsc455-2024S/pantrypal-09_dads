const request = require("supertest");
const app = require("../server");
const { connectToDb, closeDb, getDb } = require("../utils/database");

jest.setTimeout(30000);

beforeAll(async () => {
  await connectToDb();
});

afterAll(async () => {
  await closeDb();
});

let token;

beforeEach(async () => {
  const db = getDb();
  await db.collection("users").deleteMany({ email: "testuser@example.com" });

  // Create a test user and get a token
  await request(app).post("/api/auth/signup").send({
    email: "testuser@example.com",
    password: "password",
  });

  const response = await request(app).post("/api/auth/login").send({
    email: "testuser@example.com",
    password: "password",
  });

  token = response.body.token;
});

describe("Ingredients Routes", () => {
  test("should add ingredients to a user", async () => {
    const ingredients = [
      { name: "tomato", quantity: 2, unit: "pcs", notes: "" },
      { name: "cheese", quantity: 1, unit: "block", notes: "" },
    ];

    const response = await request(app)
      .post("/api/ingredients/update")
      .set("Authorization", `Bearer ${token}`)
      .send({
        ingredients,
      });

    expect(response.status).toBe(200);
    expect(response.body.ingredients).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "tomato",
          quantity: 2,
          unit: "pcs",
          notes: "",
        }),
        expect.objectContaining({
          name: "cheese",
          quantity: 1,
          unit: "block",
          notes: "",
        }),
      ]),
    );
  });

  test("should fetch ingredients for a user", async () => {
    const ingredients = [
      { name: "cheese", quantity: 1, unit: "block", notes: "" },
      { name: "tomato", quantity: 2, unit: "pcs", notes: "" },
    ];

    await request(app)
      .post("/api/ingredients/update")
      .set("Authorization", `Bearer ${token}`)
      .send({ ingredients });

    const response = await request(app)
      .get("/api/ingredients")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.ingredients).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "cheese",
          quantity: 1,
          unit: "block",
          notes: "",
        }),
        expect.objectContaining({
          name: "tomato",
          quantity: 2,
          unit: "pcs",
          notes: "",
        }),
      ]),
    );
  });

  test("should not fetch ingredients for a non-existent user", async () => {
    const response = await request(app)
      .get("/api/ingredients")
      .set("Authorization", `Bearer invalid_token`);
    expect(response.status).toBe(401); // Unauthorized due to invalid token
  });

  test("should not fetch ingredients without being authenticated", async () => {
    const response = await request(app).get("/api/ingredients");
    expect(response.status).toBe(401); // Unauthorized
  });

  test("should not add ingredients without being authenticated", async () => {
    const ingredients = [
      { name: "tomato", quantity: 2, unit: "pcs", notes: "" },
      { name: "cheese", quantity: 1, unit: "block", notes: "" },
    ];

    const response = await request(app)
      .post("/api/ingredients/update")
      .send({ ingredients });
    expect(response.status).toBe(401); // Unauthorized
  });
});
