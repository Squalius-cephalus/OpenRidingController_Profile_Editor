export type Mode = 'keyboard' | 'mouse_button' | 'mouse_move' | 'analog' | 'gamepad' | 'macro'

export interface ButtonConfig {
  mode: Mode
  keycode: string
  action: string
  value: number
  analog_value: number
  macro?: MacroStep[]
}

export interface MacroStep {
  mode: Mode
  keycode: string
  action: string
  value: number
  analog_value: number
}
export interface Buttons {
  start_moving: ButtonConfig
  add_speed: ButtonConfig
  slow_down: ButtonConfig
  stop: ButtonConfig
  reverse: ButtonConfig
  after_reverse: ButtonConfig
  jump: ButtonConfig
  right_backward_slow: ButtonConfig
  right_backward_fast: ButtonConfig

  button1: ButtonConfig
  button2: ButtonConfig
  button3: ButtonConfig
  button4: ButtonConfig

  nunchuck_c_button: ButtonConfig
  nunchuck_z_button: ButtonConfig
  nunchuck_flick_left: ButtonConfig
  nunchuck_flick_right: ButtonConfig
}

export interface ReinMode {
  mode: string
  sensitivity: number
  axis: string
  mouse_hold: boolean
  mouse_returning: boolean
  mouse_max_distance: number
  threshold: number
  left_key: string
  right_key: string
}

export interface NunchuckMode {
  mode: string
  sensitivity: number
  axis: string
}

export interface Profile {
  name: string
  settings: Settings
  rein_mode: ReinMode
  nunchuck_mode: NunchuckMode
  buttons: Buttons
}
export interface Settings {
  led_color: number[]
  reins_threshold_slow_down: number
  reins_threshold_rein_back: number
  reins_threshold_stop: number
  stirrup_speed_threshold_fast: number
  stirrup_speed_threshold_slow: number
}
