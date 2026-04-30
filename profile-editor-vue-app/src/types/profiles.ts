export type Mode = 'Keyboard' | 'MouseButton' | 'MouseMove' | 'Joystick' | 'Gamepad' | 'Macro'

export interface ButtonConfig {
  Mode: Mode
  Keycode: string
  Action: string
  Value: number
  AnalogValue: number
  Macro?: MacroStep[]
}

export interface MacroStep {
  Mode: Mode
  Keycode: string
  Action: string
  Value: number
  AnalogValue: number
}
export interface Buttons {
  'Add Speed': ButtonConfig
  'Slow Down': ButtonConfig
  Stop: ButtonConfig
  Reverse: ButtonConfig
  'After Reverse': ButtonConfig
  Jump: ButtonConfig
  'Right Backward': ButtonConfig

  Button1: ButtonConfig
  Button2: ButtonConfig
  Button3: ButtonConfig
  Button4: ButtonConfig

  'Nunchuck C Button': ButtonConfig
  'Nunchuck Z Button': ButtonConfig
  'Nunchuck Left Flick': ButtonConfig
  'Nunchuck Right Flick': ButtonConfig
}

export interface ReinMode {
  Mode: string
  Sensitivity?: number
  Axis?: string
  MouseBehaviour: string
  MouseHold: boolean
  MouseReturning: boolean
  Threshold?: number
  LeftKey: string
  RightKey: string
}

export interface NunchuckMode {
  Mode: string
  Sensitivity: number
  Axis: string
}

export interface Profile {
  Name: string
  Settings: {
    LEDColor: number[]
    StirrupsForwardThreshold: number
    StirrupsBackwardThreshold: number
    StirrupsDeadZone: number
    ReinsThresholdSlowDown: number
    ReinsThresholdReinBack: number
    ReinsThresholdStop: number
    ReinsDeadZone: number
  }
  ReinMode: ReinMode
  NunchuckMode: NunchuckMode
  Buttons: Buttons
}

export interface Settings {
  LEDColor: number[]

  StirrupsForwardThreshold: number
  StirrupsBackwardThreshold: number
  StirrupsDeadZone: number

  ReinsThresholdSlowDown: number
  ReinsThresholdReinBack: number
  ReinsThresholdStop: number
  ReinsDeadZone: number
}
