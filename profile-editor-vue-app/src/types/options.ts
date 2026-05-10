export const ReinModeOptions = [
  { label: 'Mouse', value: 'mouse' },
  { label: 'Joystick', value: 'analog' },
  { label: 'Keyboard', value: 'keyboard' },
] as const

export const NunchuckOptions = [
  { label: 'Mouse', value: 'mouse' },
  { label: 'Joystick', value: 'analog' },
] as const

export const ReinModeOptionsAxis = [
  { label: 'Left Joystick', value: 'LSX' },
  { label: 'Right Joystick', value: 'RSX' },
] as const

export const NunchuckOptionsAxis = [
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
  { label: 'Wait', value: 'wait' },
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
  { label: 'Start Moving - (Left Stirrup Backward Slow)', value: 'start_moving' },
  { label: 'Add Speed - (Left Stirrup Backward Fast)', value: 'add_speed' },
  { label: 'Slow Down - (Pull Reins Slightly)', value: 'slow_down' },
  { label: 'Stop - (Pull Reins Far Back)', value: 'stop' },
  { label: 'Reverse/Rein Back - (Pull Reins and Move Left Stirrup Forward)', value: 'reverse' },
  { label: 'After Reverse - (When Reins are released)', value: 'after_reverse' },
  { label: 'Jump - (Both Stirrups Forward + Pull Reins Slightly)', value: 'jump' },
  { label: 'Extra Movement 1 - (Right Stirrup Backward Slow)', value: 'right_backward_slow' },
  { label: 'Extra Movement 2 - (Right Stirrup Backward Fast)', value: 'right_backward_fast' },
  { label: 'Button 1 - (Controller Box Button)', value: 'button1' },
  { label: 'Button 2 - (Controller Box Button)', value: 'button2' },
  { label: 'Button 3 - (Controller Box Button)', value: 'button3' },
  { label: 'Button 4 - (Controller Box Button)', value: 'button4' },
  { label: 'Nunchuck C Button', value: 'nunchuck_c_button' },
  { label: 'Nunchuck Z Button', value: 'nunchuck_z_button' },
  { label: 'Nunchuck Left Flick', value: 'nunchuck_flick_left' },
  { label: 'Nunchuck Right Flick', value: 'nunchuck_flick_right' },
] as const
