export const ReinModeOptions = [
  { label: 'Mouse', value: 'mouse' },
  { label: 'Analog', value: 'joystick' },
  { label: 'Keyboard', value: 'keyboard' },
] as const

export const NunchuckOptions = [
  { label: 'Mouse', value: 'mouse' },
  { label: 'Analog', value: 'joystick' },
] as const

export const ReinModeOptionsAxis = [
  { label: 'Left Joystick', value: 'LS' },
  { label: 'Right Joystick', value: 'RS' },
] as const

export const ButtonOptions = [
  { label: 'Mouse Move', value: 'mouse_move' },
  { label: 'Mouse Button', value: 'mouse_button' },
  { label: 'Analog', value: 'analog' },
  { label: 'Keyboard', value: 'keyboard' },
  { label: 'Gamepad', value: 'gamepad' },
  { label: 'Macro', value: 'macro' },
] as const

export const MacroOptions = [
  { label: 'Mouse Move', value: 'mouse_move' },
  { label: 'Mouse Button', value: 'MouseButton' },
  { label: 'Analog', value: 'analog' },
  { label: 'Keyboard', value: 'keyboard' },
  { label: 'Gamepad', value: 'gamepad' },
] as const

export const ActionOptions = [
  { label: 'Tap', value: 'tap' },
  { label: 'Hold', value: 'hold' },
  { label: 'Toggle', value: 'toggle' },
  { label: 'Toggle On', value: 'toggle_on' },
  { label: 'Toggle Off', value: 'toggle_off' },
  { label: 'Multitap', value: 'multitap' },
] as const

export const ButtonNames = [
  { label: 'Start Moving', value: 'start_moving' },
  { label: 'Add Speed', value: 'add_speed' },
  { label: 'Slow Down', value: 'slow_down' },
  { label: 'Stop', value: 'stop' },
  { label: 'Reverse', value: 'reverse' },
  { label: 'After Reverse', value: 'after_reverse' },
  { label: 'Jump', value: 'jump' },
  { label: 'Right Stirrup Backward Slow', value: 'right_backward_slow' },
  { label: 'Right Stirrup Backward Fast', value: 'right_backward_fast' },
  { label: 'Button 1', value: 'button1' },
  { label: 'Button 2', value: 'button2' },
  { label: 'Button 3', value: 'button3' },
  { label: 'Button 4', value: 'button4' },
  { label: 'Nunchuck C Button', value: 'nunchuck_c_button' },
  { label: 'Nunchuck Z Button', value: 'nunchuck_z_button' },
  { label: 'Nunchuck Left Flick', value: 'nunchuck_flick_left' },
  { label: 'Nunchuck Right Flick', value: 'nunchuck_flick_right' },
] as const
