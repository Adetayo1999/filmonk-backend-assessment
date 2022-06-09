import mongoose from "mongoose";
import request from "supertest";
import app from "../startup";

beforeAll(() => {
  mongoose.connect("mongodb://localhost:27017/test-db");
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("tests on post endpoint", () => {
  // test to add a post and get a json status code 200
  test("a post gets added correctly", async () => {
    const response = await request(app)
      .post("/postDetails")
      .send({ name: "Michael Jackson", age: 45 });
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toBe("POST CREATED");
  });
  // test that an invalid data returns a 400 error code
  test("a post gives a 400 status code on invalid data", async () => {
    const response = await request(app)
      .post("/postDetails")
      .send({ username: "Jamie White" });
    expect(response.statusCode).toEqual(400);
  });
});

describe("tests on the get endpoint", () => {
  // test to get post from the database
  test("checks if the get request returns the correct information", async () => {
    await request(app)
      .post("/postDetails")
      .send({ name: "Michael Jackson", age: 45 });
    const response = await request(app).get("/getDetails");
    expect(response.body.posts[0].name).toBe("Michael Jackson");
  });
});
