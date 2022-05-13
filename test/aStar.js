import assert from 'assert'
import { aStar } from '../src/aStar.js'
import { recordFunction } from './util.js'

describe('aStar', function () {
	const target = [3, 4]
  const getIsTarget = recordFunction(([x, y]) => x === target[0] && y === target[1])
  const equals = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2
	const cost = path => path.length
	const heur = ([x, y]) => Math.sqrt((target[0] - x) * (target[0] - x) + (target[1] - y) * (target[1] - y))

  it('should find the shortest path in simple test', function () {
    const isTarget = getIsTarget()
		const getChildren = ([x, y]) => [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]]
  	const _aStar = aStar(isTarget, cost, heur)(getChildren, equals)([0, 0])
    assert.deepEqual(_aStar, [[0,0],[0,1],[0,2],[1,2],[1,3],[2,3],[2,4],[3,4]])
    assert.deepEqual([...isTarget.calls], [[[[0,0]],false],[[[0,1]],false],[[[1,0]],false],[[[0,2]],false],[[[1,1]],false],[[[1,2]],false],[[[2,0]],false],[[[0,3]],false],[[[2,1]],false],[[[1,3]],false],[[[2,2]],false],[[[2,3]],false],[[[-1,0]],false],[[[0,-1]],false],[[[-1,1]],false],[[[3,0]],false],[[[0,4]],false],[[[3,1]],false],[[[1,4]],false],[[[3,2]],false],[[[2,4]],false],[[[3,3]],false],[[[3,4]],true]])
  })
  it('should find the shortest path in test with holes', function () {
    const isTarget = getIsTarget()
		const getChildren = ([x, y]) => [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]]
			.filter(([x, y]) => !(x === 2 && y === 2))
  	const _aStar = aStar(isTarget, cost, heur)(getChildren, equals)([0, 0])
    assert.deepEqual(_aStar, [[0,0],[0,1],[0,2],[1,2],[1,3],[2,3],[2,4],[3,4]])
    assert.deepEqual([...isTarget.calls], [[[[0,0]],false],[[[0,1]],false],[[[1,0]],false],[[[0,2]],false],[[[1,1]],false],[[[1,2]],false],[[[2,0]],false],[[[0,3]],false],[[[2,1]],false],[[[1,3]],false],[[[2,3]],false],[[[-1,0]],false],[[[0,-1]],false],[[[-1,1]],false],[[[3,0]],false],[[[0,4]],false],[[[3,1]],false],[[[1,4]],false],[[[2,4]],false],[[[3,3]],false],[[[3,2]],false],[[[3,4]],true]])
  })
})
