export const height = getChildren => tree => 1 + Math.max(0, ...getChildren(tree).map(height(getChildren)))
