export const getChildrenPaths = getChildren => path => {
	return getChildren(path[path.length - 1]).map(child => [...path, child])
}

export const toPath = tree => [tree]
