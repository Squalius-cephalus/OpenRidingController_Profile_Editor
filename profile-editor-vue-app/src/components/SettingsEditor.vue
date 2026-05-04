<script setup lang="ts">
import { ref } from 'vue'
import type { Settings } from '../types/profiles'

const settings = defineModel<Settings>()
const visible = ref(false)
</script>

<template>
  <div v-if="settings">
    <h2>Settings</h2>

    <label> LED Color</label>
    <input type="text" v-model.number="settings.LEDColor" />
    <div><button v-if="visible" @click="visible = !visible">Hide Thresholds</button></div>
    <div><button v-if="!visible" @click="visible = !visible">Show Thresholds</button></div>

    <div v-if="visible">
      <div>
        <h3>Reins</h3>
        <label> Threshold Slow Down</label>
        <input type="number" v-model.number="settings.ReinsThresholdSlowDown" />

        <label> Threshold Rein Back </label>
        <input type="number" v-model.number="settings.ReinsThresholdReinBack" />

        <label> Threshold Stop</label>
        <input type="number" v-model.number="settings.ReinsThresholdStop" />

        <label> Dead Zone </label>
        <input type="number" v-model.number="settings.ReinsThresholdStop" />
      </div>
    </div>
  </div>
</template>
