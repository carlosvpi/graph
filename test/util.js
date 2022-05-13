export const Tree = (root, ...children) => [root, ...children]
export const getChildren = ([_, ...children]) => children

export const tree = Tree(
  1,
  Tree(2, Tree(3), Tree(4)),
  Tree(5, Tree(6, Tree(7)))
)

export const toArray = (generator, limit) => {
  const result = []
  for (let item of generator) {
    result.push(item)
    if (limit && result.length >= limit){ 
      return result
    }
  }
  return result
}

export const recordFunction = f => () => {
  const g = (...args) => {
    const result = f(...args)
    g.calls.set([...args], result)
    return result
  }
  g.param = f
  g.calls = new Map([])
  return g
}
