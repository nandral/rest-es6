function findPatternIndexes(text, pattern) {
  const M = pattern.length;
  const N = text.length;
  const output = {
    subtext: pattern,
    result: ""
  };
  for (let i = 0; i <= N - M; i++) {
    let j;

    for (j = 0; j < M; j++)
      if (text.charAt(i + j).toLowerCase() != pattern.charAt(j).toLowerCase())
        break;

    if (j == M) {
      output.result += i + 1 + ", ";
    }
  }
  output.result =
    output.result.length > 0 ? output.result.slice(0, -2) : "<No Output>";

  return output;
}

module.exports.findPatternIndexes = findPatternIndexes;
