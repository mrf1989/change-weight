const expect = require('chai').expect
const cw = require('..').default

describe('#cw', function () {
  it('Kilograms to pounds', function () {
    const result = cw(3, {lb: true})
    expect(result).to.equal(6.61)
  })

  it('Pounds to kilograms', function () {
    const result = cw(3, {kg: true})
    expect(result).to.equal(1.36)
  })
})
