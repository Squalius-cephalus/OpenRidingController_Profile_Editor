<script setup lang="ts">
import type { ReinMode } from '../types/profiles'
import { ReinModeOptions, ReinModeOptionsAxis } from '../types/options'

import { getKeycodes } from '@/utils/useKeycodes'

const reinmode = defineModel<ReinMode>()
</script>

<template>
  <div v-if="reinmode">
    <h2>Rein Mode</h2>

    <label>Emulation</label>

    <select v-model="reinmode.Mode">
      <option v-for="opt in ReinModeOptions" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <div v-if="reinmode.Mode === 'Joystick'">
      <label>Joystick Axis</label>
      <select v-model="reinmode.Axis">
        <option v-for="opt in ReinModeOptionsAxis" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div v-if="reinmode.Mode === 'Joystick' || reinmode.Mode === 'Mouse'">
      <label>Sensitivity</label>
      <input type="number" step="0.1" v-model.number="reinmode.Sensitivity" :min="0.1" :max="10" />
    </div>

    <div v-if="reinmode.Mode === 'Mouse'">
      <div>
        <label> Hold Mouse</label>
        <input type="checkbox" v-model="reinmode['MouseHold']" />

        <div>
          <label> Return to center</label>
          <input type="checkbox" v-model="reinmode['MouseReturning']" />
        </div>
      </div>
    </div>

    <div v-if="reinmode.Mode === 'Keyboard'">
      <div>
        <label>Threshold</label>
        <input type="number" step="0.1" v-model.number="reinmode.Threshold" />
      </div>
      <div>
        <label>Left</label>

        <select v-model="reinmode.LeftKey">
          <option v-for="k in getKeycodes(reinmode.Mode)" :key="k.value" :value="k.value">
            {{ k.label }}
          </option>
        </select>
      </div>
      <label>Right</label>
      <select v-model="reinmode.RightKey">
        <option v-for="k in getKeycodes(reinmode.Mode)" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>
    </div>
  </div>
</template>
