const axios = require("axios");
const assert = require("assert");
const Promise = require("bluebird");

const DOMAIN = "https://join.reckon.com";

async function prepareInboundData() {
  let retry = true;
  while (retry) {
    try {
      //Get rangeInfo
      let res = await axios.get(DOMAIN + "/test1/rangeInfo");
      const rangeInfo = res.data;
      assert.ok(rangeInfo.lower != undefined);
      assert.ok(rangeInfo.upper != undefined);

      //DivisorInfo
      res = await axios.get(DOMAIN + "/test1/divisorInfo");
      const divisorInfo = res.data;
      assert.ok(divisorInfo.outputDetails);
      assert.ok(divisorInfo.outputDetails.length > 0);

      retry = false;

      return { rangeInfo, divisorInfo };
    } catch (err) {
      console.log("Error occured ... retrying again in 5 secs");
      await Promise.delay(5000);

      retry = true;
    }
  }
}

module.exports.prepareInboundData = prepareInboundData;
