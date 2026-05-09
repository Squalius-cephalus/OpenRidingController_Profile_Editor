<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Settings } from '../types/profiles'
import { clamp } from '@/utils/useKeycodes'

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
        <input
          type="number"
          v-model.number="settings.reins_threshold_slow_down"
          @input="
            settings.reins_threshold_slow_down = clamp(settings.reins_threshold_slow_down, 10, 100)
          "
        />

        <label> Threshold Rein Back </label>
        <input
          type="number"
          v-model.number="settings.reins_threshold_rein_back"
          @input="
            settings.reins_threshold_rein_back = clamp(settings.reins_threshold_rein_back, 100, 511)
          "
        />

        <label> Threshold Stop</label>
        <input
          type="number"
          v-model.number="settings.reins_threshold_stop"
          @input="settings.reins_threshold_stop = clamp(settings.reins_threshold_stop, 300, 511)"
        />
      </div>
      <div>
        <h3>Stirrups</h3>
        <label> Threshold Fast</label>
        <input
          type="number"
          v-model.number="settings.stirrup_speed_threshold_fast"
          @input="
            settings.stirrup_speed_threshold_fast = clamp(
              settings.stirrup_speed_threshold_fast,
              10,
              50,
            )
          "
        />

        <label> Threshold Slow</label>
        <input
          type="number"
          v-model.number="settings.stirrup_speed_threshold_slow"
          @input="
            settings.stirrup_speed_threshold_slow = clamp(
              settings.stirrup_speed_threshold_slow,
              10,
              50,
            )
          "
        />
      </div>
    </div>
  </div>
</template>
