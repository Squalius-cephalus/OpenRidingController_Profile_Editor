<script setup lang="ts">
import { getKeycodes } from '@/utils/useKeycodes'
import type { Buttons, ButtonConfig, MacroStep, Mode } from '../types/profiles'
import { ButtonOptions, ActionOptions, MacroOptions } from '../types/options'

const buttons = defineModel<Buttons>()

function setDefaultKeycode(step: MacroStep) {
  step.Keycode = getKeycodes(step.Mode as Mode)?.[0]?.value ?? ''
}

function GetAnalogPlaceholders() {
  return 'FIX THIS'
}

function GetValuePlaceholders() {
  return 'FIX THIS'
}
function maxSteps() {
  return 128
}

function addStep(btn: ButtonConfig) {
  if (!btn.Macro) btn.Macro = []

  btn.Macro.push({
    Mode: 'Keyboard',
    Keycode: 'A',
    Action: 'Tap',
    Value: 0,
    AnalogValue: 0,
  })
}

function removeStep(btn: ButtonConfig, si: number) {
  btn.Macro?.splice(si, 1)
}
</script>

<template>
  <div v-if="buttons">
    <h2>Actions and Buttons</h2>
    <div v-for="(btn, name) in buttons" :key="name">
      <h3>{{ name }}</h3>

      <select v-model="btn.Mode">
        <option v-for="opt in ButtonOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>

      <!-- Keycode dropdown per mode -->
      <select v-if="btn.Mode !== 'Macro'" v-model="btn.Keycode">
        <option v-for="k in getKeycodes(btn.Mode)" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>

      <select v-if="btn.Mode !== 'Macro'" v-model="btn.Action">
        <option v-for="opt in ActionOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <!-- Value fields -->
      <input
        v-if="btn.Mode !== 'Macro'"
        type="number"
        :step="maxSteps()"
        v-model.number="btn.Value"
        :placeholder="GetValuePlaceholders()"
        :disabled="!['Hold', 'Multitap'].includes(btn.Action)"
        :min="0"
        :max="10"
      />

      <input
        v-if="btn.Mode !== 'Macro'"
        type="number"
        step="1"
        v-model.number="btn['AnalogValue']"
        :placeholder="GetAnalogPlaceholders()"
        :min="-127"
        :max="127"
        :disabled="!['Analog', 'MouseMove'].includes(btn.Mode)"
      />

      <div v-if="btn.Mode === 'Macro'">
        <div v-for="(step, si) in btn['Macro']" :key="si">
          <select v-model="step.Mode" @change="setDefaultKeycode(step)">
            <option v-for="opt in MacroOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>

          <select v-model="step.Keycode">
            <option v-for="k in getKeycodes(step.Mode)" :key="k.value" :value="k.value">
              {{ k.label }}
            </option>
          </select>
          <select v-model="step.Action">
            <option v-for="opt in ActionOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>

          <input
            type="number"
            v-model.number="step.Value"
            :placeholder="GetValuePlaceholders()"
            :disabled="!['Hold', 'Multitap'].includes(step.Action)"
            :step="maxSteps()"
            :min="0"
            :max="10"
          />

          <input
            type="number"
            v-model.number="step['AnalogValue']"
            :disabled="!['MouseMove', 'Analog'].includes(step.Mode)"
            :placeholder="GetAnalogPlaceholders()"
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
