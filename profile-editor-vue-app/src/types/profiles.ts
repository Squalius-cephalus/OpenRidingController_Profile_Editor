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

  nunchuk_c_button: ButtonConfig
  nunchuk_z_button: ButtonConfig
  nunchuk_flick_left: ButtonConfig
  nunchuk_flick_right: ButtonConfig
}

export interface ReinMode {
  mode: string
  sensitivity: number
  axis: string
  mouse_hold: boolean
  mouse_returning: boolean
  mouse_max_distance: number
  keyboard_threshold: number
  left_key: string
  right_key: string
}

export interface NunchukMode {
  mode: string
  sensitivity: number
  axis: string
}

export interface Profile {
  name: string
  settings: Settings
  rein_mode: ReinMode
  nunchuk_mode: NunchukMode
  buttons: Buttons
}
export interface Settings {
  led_color: number[]
  reins_threshold_slow_down: number
  reins_threshold_rein_back: number
  reins_threshold_stop: number
  stirrup_speed_threshold_fast: number
  stirrup_speed_threshold_slow: number
  stirrup_forward_threshold: number
  stirrup_backward_threshold: number
  stirrup_dead_zone: number
}
