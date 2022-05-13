export const traverse = (concat = (a, b) => [...a, ...b]) => getChildren => function* (tree) {
  let stack = [tree]
  while (stack.length) {
    const [node] = stack.splice(0, 1)
    yield node
    stack = concat(stack, getChildren(node))
  }
}
