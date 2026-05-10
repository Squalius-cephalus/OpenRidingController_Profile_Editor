<script setup lang="ts">
import type { ReinMode } from '../types/profiles'
import { ReinModeOptions, ReinModeOptionsAxis } from '../types/options'

import { getKeycodes, clamp } from '@/utils/useKeycodes'

const reinmode = defineModel<ReinMode>()
</script>

<template>
  <div v-if="reinmode">
    <h2>Rein Mode</h2>

    <label>Emulation</label>

    <select v-model="reinmode.mode">
      <option v-for="opt in ReinModeOptions" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <div v-if="reinmode.mode === 'analog'">
      <label>Joystick Axis</label>
      <select v-model="reinmode.axis">
        <option v-for="opt in ReinModeOptionsAxis" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div v-if="reinmode.mode === 'analog' || reinmode.mode === 'mouse'">
      <label>Sensitivity</label>
      <input
        type="number"
        step="0.1"
        v-model.number="reinmode.sensitivity"
        @input="reinmode.sensitivity = clamp(reinmode.sensitivity, 0.1, 10)"
      />
    </div>

    <div v-if="reinmode.mode === 'mouse'">
      <div>
        <label> Hold Mouse</label>
        <input type="checkbox" v-model="reinmode['mouse_hold']" />

        <div>
          <label> Return to center</label>
          <input type="checkbox" v-model="reinmode['mouse_returning']" />
        </div>
        <div v-if="reinmode.mouse_returning">
          <label>Max distance</label>
          <input
            type="number"
            step="10"
            v-model.number="reinmode.mouse_max_distance"
            @input="reinmode.mouse_max_distance = clamp(reinmode.mouse_max_distance, 64, 2048)"
          />
        </div>
      </div>
    </div>

    <div v-if="reinmode.mode === 'keyboard'">
      <div>
        <label>Left</label>

        <select v-model="reinmode.left_key">
          <option v-for="k in getKeycodes(reinmode.mode)" :key="k.value" :value="k.value">
            {{ k.label }}
          </option>
        </select>
      </div>
      <label>Right</label>
      <select v-model="reinmode.right_key">
        <option v-for="k in getKeycodes(reinmode.mode)" :key="k.value" :value="k.value">
          {{ k.label }}
        </option>
      </select>
      <div>
        <label>Threshold</label>
        <input
          type="number"
          step="1"
          v-model.number="reinmode.keyboard_threshold"
          @input="reinmode.keyboard_threshold = clamp(reinmode.keyboard_threshold, 100, 512)"
        />
      </div>
    </div>
  </div>
</template>
