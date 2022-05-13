export const getFreshChildren = (getChildren, equals = (a, b) => a === b) => () => {
	const children = new Set([])
	return tree => {
		children.add(tree)
		const newChildren = getChildren(tree).filter(newChild => {
			for (let child of children) {
				if (equals(child, newChild)) {
					return false
				}
			}
			return true
		})
		newChildren.forEach(child => children.add(child))
		// console.log({tree, newCh: c, oldCh: [...children]})
		return newChildren
	}
}
