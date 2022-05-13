import { breadthTraverse } from './breadthTraverse.js'
import { getParentChildrenPair, toParentChildPair } from './getParentChildrenPair.js'

export const dijkstra = (isTarget, getEdgeDistance = () => 1, getNodeKey = node => node) => getChildren => tree => {
  const distance = new Map([[getNodeKey(tree), 0]])
  const previous = new Map([[getNodeKey(tree), null]])
  const _traverse = breadthTraverse(getParentChildrenPair(getChildren))(toParentChildPair(tree))
  _traverse.next()

  for (let [parent, child] of _traverse) {
    const childKey = getNodeKey(child)
    const parentKey = getNodeKey(parent)
    const distanceToChild = distance.has(childKey) && distance.get(childKey)
    const distanceToParentPlusEdge = distance.get(parentKey) + getEdgeDistance(parent, child)
    if (!distanceToChild || distanceToChild > distanceToParentPlusEdge) {
      distance.set(childKey, distanceToParentPlusEdge)
      previous.set(childKey, parentKey)
    }
    if (isTarget(child)) {
      break
    }
  }

  return { distance, previous }
}
 