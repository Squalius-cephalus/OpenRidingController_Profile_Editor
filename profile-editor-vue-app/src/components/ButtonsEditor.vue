<script setup lang="ts">
import { getKeycodes } from '@/utils/useKeycodes'
import type { Buttons, ButtonConfig, MacroStep, Mode } from '../types/profiles'
import { ButtonOptions, ActionOptions, MacroOptions, ButtonNames } from '../types/options'
function getButtonLabel(value: string) {
  return ButtonNames.find((o) => o.value === value)?.label ?? value
}
const buttons = defineModel<Buttons>()

function setDefaultKeycode(step: MacroStep) {
  step.keycode = getKeycodes(step.mode as Mode)?.[0]?.value ?? ''
}

function getAnalogPlaceholder(mode: string) {
  switch (mode) {
    case 'analog':
      return '-127 - 127'

    case 'mouse_move':
      return 'Distance'

    default:
      return ''
  }
}

function getValuePlaceholder(action: string) {
  switch (action) {
    case 'hold':
      return 'Seconds'

    case 'multitap':
      return 'Amount'

    default:
      return ''
  }
}
function maxSteps(action: string) {
  switch (action) {
    case 'hold':
      return 0.1

    case 'multitap':
      return 1

    default:
      return 1
  }
}

function addStep(btn: ButtonConfig) {
  if (!btn.macro) btn.macro = []

  btn.macro.push({
    mode: 'keyboard',
    keycode: 'A',
    action: 'tap',
    value: 0,
    analog_value: 0,
  })
}

function removeStep(btn: ButtonConfig, si: number) {
  btn.macro?.splice(si, 1)
}
</script>

<template>
  <div v-if="buttons">
    <h2>actions and Buttons</h2>
    <div v-for="(btn, name) in buttons" :key="name">
      <h3>{{ getButtonLabel(name) }}</h3>

      <select v-model="btn.mode">
        <option v-for="opt in ButtonOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>

      <!-- Keycode dropdown per mode -->
      <select v-if="btn.mode !== 'macro'" v-model="btn.keycode">
        <option v-for="k in getKeycodes(btn.mode)" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>

      <select v-if="btn.mode !== 'macro'" v-model="btn.action">
        <option v-for="opt in ActionOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <!-- Value fields -->
      <input
        v-if="btn.mode !== 'macro'"
        type="number"
        :step="maxSteps(btn.action)"
        v-model.number="btn.value"
        :placeholder="getValuePlaceholder(btn.action)"
        :disabled="!['hold', 'multitap'].includes(btn.action)"
        :min="0"
        :max="10"
      />

      <input
        v-if="btn.mode !== 'macro'"
        type="number"
        step="1"
        v-model.number="btn['analog_value']"
        :placeholder="getAnalogPlaceholder(btn.mode)"
        :min="-127"
        :max="127"
        :disabled="!['analog', 'mouse_move'].includes(btn.mode)"
      />

      <div v-if="btn.mode === 'macro'">
        <div v-for="(step, si) in btn['macro']" :key="si">
          <select v-model="step.mode" @change="setDefaultKeycode(step)">
            <option v-for="opt in MacroOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>

          <select v-model="step.keycode">
            <option v-for="k in getKeycodes(step.mode)" :key="k.value" :value="k.value">
              {{ k.label }}
            </option>
          </select>
          <select v-model="step.action">
            <option v-for="opt in ActionOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>

          <input
            type="number"
            v-model.number="step.value"
            :placeholder="getValuePlaceholder(step.action)"
            :disabled="!['Hold', 'Multitap'].includes(step.action)"
            :step="maxSteps(step.action)"
            :min="0"
            :max="10"
          />

          <input
            type="number"
            v-model.number="step['analog_value']"
            :disabled="!['mouse_move', 'analog'].includes(step.mode)"
            :placeholder="getAnalogPlaceholder(step.mode)"
            :min="-127"
            :max="127"
          />

          <button @click="removeStep(btn, si)" style="background-color: red; color: white">
            X
          </button>
        </div>
        <button @click="addStep(btn)" style="background-color: green; color: white">
          Add Step
        </button>
      </div>
    </div>
  </div>
</template>
