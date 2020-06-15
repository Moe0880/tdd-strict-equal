
function strictEqual(firstValue, secondValue) {
  // eslint-disable-next-line eqeqeq
  if (typeof (firstValue) == typeof (secondValue) && firstValue == secondValue) {
    return true
  }

  return false
}

module.exports = strictEqual

