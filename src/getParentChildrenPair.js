export const getParentChildrenPair = getChildren => ([grandParent, parent]) => {
	return getChildren(parent).map(child => [parent, child])
}

export const toParentChildPair = tree => [null, tree]
