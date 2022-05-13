import { traverse } from './traverse.js'

export const depthTraverse = traverse((a, b) => [...b, ...a])