const strictEqual = require('../strictEqual')
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

describe('index', () => {
  describe('strictEqual', () => {
    it('compares the two values and returns a boolean', () => {
      const input = ['abc', 'abc', 'cba', '4', 4, 4, 4.0, '4.0']

      const result = strictEqual(input[5], input[4])


      expect(result).to.equal(true)
    })
  })
})
