
function strictEqual(firstValue, secondValue) {
  // eslint-disable-next-line eqeqeq
  if (firstValue == secondValue && typeof (firstValue) == typeof (secondValue)) {
    return true
  } else {
    return false
  }
}

module.exports = strictEqual

