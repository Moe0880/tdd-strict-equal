const strictEqual = require('../index')
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

describe('index', () => {
  describe('strictEqual', () => {
    it('compares the two values and returns a boolean', () => {
      const input = ['abc', 'abc', 'cba', '4', 4, 4.5, 4]

      const result = strictEqual(input[3], input[4])


      expect(result).to.equal(true)
    })
  })
})
