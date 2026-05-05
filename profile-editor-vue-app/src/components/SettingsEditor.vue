<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Settings } from '../types/profiles'

const rgbToHex = (rgb: number[]) => {
  return '#' + rgb.map((v) => v.toString(16).padStart(2, '0')).join('')
}

const hexToRgb = (hex: string): number[] => {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

const hexColor = computed({
  get() {
    return rgbToHex(settings.value!.led_color)
  },
  set(value: string) {
    settings.value!.led_color = hexToRgb(value)
  },
})

const settings = defineModel<Settings>()
const visible = ref(false)
</script>

<template>
  <div v-if="settings">
    <h2>Settings</h2>

    <label> LED Color</label>
    <input type="color" v-model="hexColor" />

    <div><button v-if="visible" @click="visible = !visible">Hide Thresholds</button></div>
    <div><button v-if="!visible" @click="visible = !visible">Show Thresholds</button></div>

    <div v-if="visible">
      <div>
        <h3>Reins</h3>
        <label> Threshold Slow Down</label>
        <input type="number" v-model.number="settings.reins_threshold_slow_down" />

        <label> Threshold Rein Back </label>
        <input type="number" v-model.number="settings.reins_threshold_rein_back" />

        <label> Threshold Stop</label>
        <input type="number" v-model.number="settings.reins_threshold_stop" />

        <label> Dead Zone </label>
        <input type="number" v-model.number="settings.reins_dead_zone" />
      </div>
    </div>
  </div>
</template>
