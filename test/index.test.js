const config = require('../.prettierrc')

describe('prettier-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
