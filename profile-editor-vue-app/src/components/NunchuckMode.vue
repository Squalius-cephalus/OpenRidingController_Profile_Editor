<script setup lang="ts">
import type { NunchuckMode } from '../types/profiles'
import { NunchuckOptions, ReinModeOptionsAxis } from '../types/options'

const nunchuckmode = defineModel<NunchuckMode>()
</script>

<template>
  <div v-if="nunchuckmode">
    <h2>Nunchuck Mode</h2>

    <label>Emulation</label>

    <select v-model="nunchuckmode.mode">
      <option v-for="opt in NunchuckOptions" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <div v-if="nunchuckmode.mode === 'joystick'">
      <label>Joystick Axis</label>
      <select v-model="nunchuckmode.axis">
        <option v-for="opt in ReinModeOptionsAxis" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <div>
      <label>Sensitivity</label>
      <input
        type="number"
        step="0.1"
        v-model.number="nunchuckmode.sensitivity"
        :min="0.1"
        :max="10"
      />
    </div>
  </div>
</template>
