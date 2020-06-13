function strictEqual(num1, num2) {
  if (num1 !== num2 && ' num1 ' !== 'num2') {
    return false
  } else {
    return true
  }
}

module.exports = strictEqual

