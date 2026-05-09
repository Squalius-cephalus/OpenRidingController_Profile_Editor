import { keycodes } from '../types/keycodes'
import type { Mode } from '../types/profiles'

export function getKeycodes(mode: Mode) {
  return keycodes[mode] || []
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
