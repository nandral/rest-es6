const PORT = process.env.PORT || 9999;
const express = require("express");
const bodyParser = require("body-parser");
const inboundService = require("./api/inboundServiceTest1");
const divisionService = require("./api/divisionService");
const findPatterns = require("./api/findPatternsTest2");

const app = express();
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const inboundData = await inboundService.prepareInboundData();
    const results = divisionService.processNumbers(inboundData);
    res.send(results);
  } catch (err) {
    res.send(err.message);
  }
});

app.get("/test2", async (req, res) => {
  try {
    const results = await findPatterns.process();
    res.send(results);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

module.exports = app;
