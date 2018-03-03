function processNumbers({ rangeInfo, divisorInfo }) {
  const divisors = divisorInfo.outputDetails;
  let resp = "";
  for (let i = rangeInfo.lower; i <= rangeInfo.upper; i++) {
    resp += i + ": ";
    divisors.map(val => {
      resp += Number.isInteger(i / val.divisor) ? val.output : "";
    });
    resp += "<br/>";
  }
  return resp;
}

module.exports.processNumbers = processNumbers;
