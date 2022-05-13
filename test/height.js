import assert from 'assert'
import { height } from '../src/height.js'
import { getChildren, tree } from './util.js'

describe('height', function () {
  it('should return 1 when tree has no children', function () {
    assert.equal(height(() => [])(''), 1)
  })
  it('should return 2 when tree has only leaves', function () {
    assert.equal(height(x => x === 1 ? [0, 0, 0] : [])(1), 2)
  })
  it('should return 2 when tree has only leaves', function () {
    assert.equal(height(getChildren)(tree), 4)
  })
})
