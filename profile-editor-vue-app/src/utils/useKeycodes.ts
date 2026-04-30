import { keycodes } from '../types/keycodes'
import type { Mode } from '../types/profiles'

export function getKeycodes(mode: Mode) {
  return keycodes[mode] || []
}
