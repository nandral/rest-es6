const axios = require("axios");
const assert = require("assert");
const Promise = require("bluebird");

const DOMAIN = "https://join.reckon.com";

async function prepareInboundData() {
  let retry = true;
  while (retry) {
    try {
      //Get rangeInfo
      let res = await axios.get(DOMAIN + "/test2/textToSearch");
      const textToSearch = res.data;
      assert.ok(textToSearch.text != undefined);

      //DivisorInfo
      res = await axios.get(DOMAIN + "/test2/subTexts");
      const subTexts = res.data;
      assert.ok(subTexts.subTexts);

      retry = false;

      return { ...textToSearch, ...subTexts };
    } catch (err) {
      console.log("Error occured ... retrying again in 5 secs");
      await Promise.delay(5000);

      retry = true;
    }
  }
}
module.exports.prepareInboundData = prepareInboundData;

// prepareInboundData().then(res => console.log(res));
