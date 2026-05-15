<script setup lang="ts">
import type { NunchukMode } from '../types/profiles'
import { NunchukOptions, NunchukOptionsAxis } from '../types/options'
import { clamp } from '@/utils/useKeycodes'

const nunchukmode = defineModel<NunchukMode>()
</script>

<template>
  <div v-if="nunchukmode">
    <h2>Nunchuk Mode</h2>

    <label>Emulation</label>

    <select v-model="nunchukmode.mode">
      <option v-for="opt in NunchukOptions" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <div v-if="nunchukmode.mode === 'analog'">
      <label>Joystick Axis</label>
      <select v-model="nunchukmode.axis">
        <option v-for="opt in NunchukOptionsAxis" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div>
      <label>Sensitivity</label>
      <input
        type="number"
        step="0.1"
        v-model.number="nunchukmode.sensitivity"
        @input="nunchukmode.sensitivity = clamp(nunchukmode.sensitivity, 0.1, 10)"
      />
    </div>
  </div>
</template>
