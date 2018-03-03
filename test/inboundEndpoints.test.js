const DOMAIN = "https://join.reckon.com";
const chai = require("chai");
const should = chai.should();
const axios = require("axios");

describe("Inbound endpoints Tests", function() {
  it("1. Test1 RangeInfo", async function() {
    const res = await axios.get(DOMAIN + "/test1/rangeInfo");
    res.data.should.have.property("lower");
    res.data.should.have.property("upper");
  });

  it("2. Test1 DivisorInfo", async function() {
    const res = await axios.get(DOMAIN + "/test1/divisorInfo");
    res.data.should.have.property("outputDetails");
    res.data.outputDetails.should.be.an("array");
  });

  it("3. Test2 TextToSearch", async function() {
    const res = await axios.get(DOMAIN + "/test2/textToSearch");
    res.data.should.have.property("text");
  });

  it("4. Test2 SubTexts", async function() {
    const res = await axios.get(DOMAIN + "/test2/subTexts");
    res.data.should.have.property("subTexts");
    res.data.subTexts.should.be.an("array");
  });
});
