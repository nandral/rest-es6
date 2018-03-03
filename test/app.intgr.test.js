const chai = require("chai");
const should = chai.should();
const request = require("supertest");

const app = require("../index");

describe("Integration Tests", function() {
  it("Test1 GET API", async function() {
    const res = await request(app)
      .get("/")
      .expect(200);
    res.should.have.property("text");
  });

  it("Test2 POST to URI response", async function() {
    const res = await request(app)
      .get("/test2")
      .expect(200);
    res.body.should.have.property("result");
  });
});
