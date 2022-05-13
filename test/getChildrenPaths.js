import assert from 'assert'
import { getChildrenPaths, toPath } from '../src/getChildrenPaths.js'
import { breadthTraverse } from '../src/breadthTraverse.js'
import { depthTraverse } from '../src/depthTraverse.js'
import { getChildren, tree, toArray } from './util.js'

describe('getChildrenPaths module', function () {
  describe('getChildrenPaths', function () {
    it('should return the correct tree made of paths', function () {
      const gc = getChildrenPaths(getChildren)
      assert.deepEqual(toArray(breadthTraverse(gc)([tree])), [[[1,[2,[3],[4]],[5,[6,[7]]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[3]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[4]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]],[6,[7]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]],[6,[7]],[7]]])
      assert.deepEqual(toArray(depthTraverse(gc)([tree])), [[[1,[2,[3],[4]],[5,[6,[7]]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[3]],[[1,[2,[3],[4]],[5,[6,[7]]]],[2,[3],[4]],[4]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]],[6,[7]]],[[1,[2,[3],[4]],[5,[6,[7]]]],[5,[6,[7]]],[6,[7]],[7]]])
    })
  })
  describe('toPath', function () {
    it('should turn a node into a path of nodes', function () {
      assert.deepEqual(toPath(4), [4])
    })
  })
})