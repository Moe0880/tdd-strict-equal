function strictEqual(firstValue, secondValue) {
  if (firstValue !== secondValue && ' firstValue ' !== ' secondValue ' &&
    parseFloat(firstValue) !== parseFloat(secondValue)) {
    return false
  } else {
    return true
  }
}

module.exports = strictEqual

