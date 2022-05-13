import assert from 'assert'
import { depthTraverse } from '../src/depthTraverse.js'
import { getChildren, tree, toArray } from './util.js'

describe('depthTraverse', function () {
  it('should return [node] when node has no children', function () {
  	const traverse = depthTraverse(() => [])(0)
    assert.deepEqual(toArray(traverse), [0])
  })
  it('should return depth traverse for tree', function () {
  	const traverse = depthTraverse(getChildren)(tree)
    assert.deepEqual(toArray(traverse), [[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[3],[4],[5,[6,[7]]],[6,[7]],[7]])
  })
})
