const request = require("supertest");
const { Genres } = require("../../models/genres");
let server;

describe("/api/genres", () => {
  beforeEach(() => {
    server = require("../../app");
  });
  afterEach(async () => {
    server.close();
    await Genres.remove({});
  });
    
  describe("get", () => {
    it("/get", async () => {
      await Genres.collection.insertMany([
        { name: "genre1" },
        { name: "genre2" },
      ]);
      const response = await request(server).get("/api/genres");
      expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body.some(g => g.name === 'genre1' || g.name === 'genre2')).toBeTruthy();
    });
  });
});
