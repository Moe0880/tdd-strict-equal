const strictEqual = require('../index')
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

describe('index', () => {
  describe('strictEqual', () => {
    it('compares the two values and returns a boolean', () => {
      const input = ['abc', 2, 'abc', 'cba', '4']

      const result = strictEqual(input[0], input[2])

      expect(result).to.equal(true)
    })
  })
})
