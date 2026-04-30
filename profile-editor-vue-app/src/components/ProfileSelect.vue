<script setup lang="ts">
import type { Profile } from '../types/profiles'

defineProps<{
  profiles: Profile[]
  selectedIndex: number
}>()

const emit = defineEmits<{
  (e: 'update:selectedIndex', value: number): void
  (e: 'load', event: Event): void
  (e: 'save', event: Event): void
  (e: 'rename', event: Event): void
  (e: 'add', event: Event): void
  (e: 'remove', event: Event): void
}>()
</script>

<template>
  <select
    :value="selectedIndex"
    @change="emit('update:selectedIndex', Number(($event.target as HTMLSelectElement).value))"
  >
    <option v-for="(profile, index) in profiles" :key="index" :value="index">
      {{ profile.Name }}
    </option>
  </select>
  <div>
    <input type="file" accept="application/json" @change="emit('load', $event)" />
    <button @click="emit('save', $event)">Save JSON</button>
    <button @click="emit('rename', $event)">Rename</button>
    <button @click="emit('add', $event)">Add</button>
    <button @click="emit('remove', $event)">remove</button>
  </div>
</template>
