const URL =  "https://nandral-hometrack-test.herokuapp.com/";

const chai =  require("chai");
const should = chai.should();
const axios = require('axios');

const sampleRequest = require('./hometrack-sample-request')

describe("Functional Tests",  function(){
	it("Test GET", async function(){
		const res =  await axios.get(URL);
		res.data.should.have.property('hello');	
	})

	it("Test POST with Valid data", async function(){
		const res = await axios.post(URL,sampleRequest);
		res.data.should.have.property('response');
	})

	it("Test POST with Invalid data", async function(){
		try{
			await axios.post(URL,{});	
		}catch(err){
			// console.log(err)
			err.response.data.should.have.property('error');	
		}	
	})
})
