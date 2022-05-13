import assert from 'assert'
import { breadthTraverse } from '../src/breadthTraverse.js'
import { getChildren, tree, toArray } from './util.js'

describe('breadthTraverse', function () {
  it('should return [node] when node has no children', function () {
  	const traverse = breadthTraverse(() => [])(0)
    assert.deepEqual(toArray(traverse), [0])
  })
  it('should return depth traverse for tree', function () {
  	const traverse = breadthTraverse(getChildren)(tree)
    assert.deepEqual(toArray(traverse), [[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[5,[6,[7]]],[3],[4],[6,[7]],[7]])
  })
})
