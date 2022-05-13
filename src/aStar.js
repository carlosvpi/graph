import { traverse } from './traverse.js'
import { getChildrenPaths, toPath } from './getChildrenPaths.js'
import { getFreshChildren } from './getFreshChildren.js'

export const aStar = (isTarget, cost, heur) => (getChildren, equals = (a, b) => a === b) => {
  const concat = (a, b) => [...a, ...b].sort((p1, p2) => {
    return cost(p1) + heur(p1[p1.length - 1]) - cost(p2) - heur(p2[p2.length - 1])
  })
  const gc = getFreshChildren(getChildren, equals)

  return tree => {
    const _getChildren = getChildrenPaths(gc())
    const _traverse = traverse(concat)(_getChildren)
    for (let path of _traverse(toPath(tree))) {
      if (isTarget(path[path.length - 1])) {
        return path
      }
    }
    return []
  }
}