const chai =  require("chai");
const should = chai.should();
const request = require('supertest');
const sampleRequest = require('./hometrack-sample-request')

const app = require("../index")

describe("Integration Tests",function(){
	it("Test GET API", async function(){
		const res = await request(app).get("/").expect(200);
		res.should.have.property('body');
		res.body.should.have.property('hello');
	})

	describe("POST API",function(){
		it("1. Should fail with invalid input", async function(){
			const res = await request(app).post("/").send({}).expect(400);
			res.should.have.property('body');
			res.body.should.have.property('error');
		})

		it("2. Should succeed with valid input", async function(){
			const res = await request(app).post("/").send(sampleRequest).expect(201);
			res.should.have.property('body');
			res.body.should.have.property('response');
		})
	});
});