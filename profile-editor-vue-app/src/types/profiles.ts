export type Mode = 'Keyboard' | 'MouseButton' | 'MouseMove' | 'Analog' | 'Gamepad' | 'Macro'

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
  StartMoving: ButtonConfig
  AddSpeed: ButtonConfig
  SlowDown: ButtonConfig
  Stop: ButtonConfig
  Reverse: ButtonConfig
  AfterReverse: ButtonConfig
  Jump: ButtonConfig
  RightBackwardSlow: ButtonConfig
  RightBackwardFast: ButtonConfig

  Button1: ButtonConfig
  Button2: ButtonConfig
  Button3: ButtonConfig
  Button4: ButtonConfig

  NunchuckCButton: ButtonConfig
  NunchuckZButton: ButtonConfig
  NunchuckLeftFlick: ButtonConfig
  NunchuckRightFlick: ButtonConfig
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
  ReinsThresholdSlowDown: number
  ReinsThresholdReinBack: number
  ReinsThresholdStop: number
  ReinsDeadZone: number
}
