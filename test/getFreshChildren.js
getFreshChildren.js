import assert from 'assert'
import { getFreshChildren } from '../src/getFreshChildren.js'
import { breadthTraverse } from '../src/breadthTraverse.js'
import { depthTraverse } from '../src/depthTraverse.js'
import { toArray } from './util.js'

describe('getChildrenPaths', function () {
  it('should return the a tree with only the unvisited nodes, this is, no cycles', function () {
    const getChildren = ([x, y]) => [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]]
    const gc = getFreshChildren(getChildren, ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2)
    assert.deepEqual(toArray(breadthTraverse(gc())([1, 1]), 10), [[1,1],[0,1],[1,0],[1,2],[2,1],[-1,1],[0,0],[0,2],[1,-1],[2,0]])
    assert.deepEqual(toArray(depthTraverse(gc())([1, 1]), 10), [[1,1],[0,1],[-1,1],[-2,1],[-3,1],[-4,1],[-5,1],[-6,1],[-7,1],[-8,1]])
  })
})
