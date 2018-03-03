const inboundService = require("./inboundServiceTest2");
const stringProcessor = require("./stringProcessor");
const axios = require("axios");

async function process() {
  const { text, subTexts } = await inboundService.prepareInboundData();
  const output = {
    candidate: "Niranjan Andral",
    text,
    results: []
  };
  subTexts.map(pattern => {
    output.results.push(stringProcessor.findPatternIndexes(text, pattern));
  });

  const res = await axios.post(
    "https://join.reckon.com/test2/submitResults",
    output
  );

  return res.data;
}

module.exports.process = process;
