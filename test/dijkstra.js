import assert from 'assert'
import { dijkstra } from '../src/dijkstra.js'

describe('dijkstra', function () {
  const isTarget = node => node === 5
  const getChildren = node =>
    node === 1 ? [2, 3, 6]
    : node === 2 ? [3, 4]
    : node === 3 ? [6, 4]
    : node === 4 ? [5]
    : node === 6 ? [5]
    : []
  const getNodeKey = node => node
  const getEdgeDistance = (p, c) =>
    p === 1 && c === 2 ? 7
    : p === 1 && c === 3 ? 9
    : p === 1 && c === 6 ? 14
    : p === 2 && c === 3 ? 10
    : p === 2 && c === 4 ? 15
    : p === 3 && c === 6 ? 2
    : p === 3 && c === 4 ? 11
    : p === 4 && c === 5 ? 6
    : p === 6 && c === 5 ? 9
    : 0
  it('should find the shortest path', function () {
    const { distance, previous } = dijkstra(isTarget, getEdgeDistance, getNodeKey)(getChildren)(1)
    assert.deepEqual([...distance], [[1,0],[2,7],[3,9],[6,11],[4,20],[5,20]])
    assert.deepEqual([...previous], [[1,null],[2,1],[3,1],[6,3],[4,3],[5,6]])
  })
})

