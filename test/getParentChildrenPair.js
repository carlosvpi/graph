import assert from 'assert'
import { getParentChildrenPair, toParentChildPair } from '../src/getParentChildrenPair.js'
import { breadthTraverse } from '../src/breadthTraverse.js'
import { depthTraverse } from '../src/depthTraverse.js'
import { getChildren, tree, toArray } from './util.js'

describe('getParentChildrenPair module', function () {
  describe('getParentChildrenPair', function () {
    it('should return the correct tree made of paths', function () {
      const gc = getParentChildrenPair(getChildren)
      assert.deepEqual(toArray(breadthTraverse(gc)([null, tree])), [[null,[1,[2,[3],[4]],[5,[6,[7]]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]]],[[2,[3],[4]],[3]],[[2,[3],[4]],[4]],[[5,[6,[7]]],[6,[7]]],[[6,[7]],[7]]])
      assert.deepEqual(toArray(depthTraverse(gc)([null, tree])), [[null,[1,[2,[3],[4]],[5,[6,[7]]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]]],[[2,[3],[4]],[3]],[[2,[3],[4]],[4]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]]],[[5,[6,[7]]],[6,[7]]],[[6,[7]],[7]]])
    })
  })
  describe('getParentChildrenPair', function () {
    it('should turn a node into a pair of parent child node', function () {
      assert.deepEqual(toParentChildPair(4), [null, 4])
    })
  })
})
