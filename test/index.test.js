const config = require('../.prettierrc')

describe('eslint-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
