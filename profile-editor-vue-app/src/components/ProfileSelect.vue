<script setup lang="ts">
import type { Profile } from '../types/profiles'
import { ref } from 'vue'
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
  (e: 'import-profile', event: Event): void
}>()
const importProfile = ref<HTMLInputElement | null>(null)
function triggerImport() {
  importProfile.value?.click()
}

const loadProfiles = ref<HTMLInputElement | null>(null)
function triggerLoad() {
  loadProfiles.value?.click()
}
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
    <button class="profile-button" @click="triggerLoad">Load Profiles</button>
    <input
      type="file"
      accept="application/json"
      @change="emit('load', $event)"
      style="display: none"
      ref="loadProfiles"
    />

    <input
      type="file"
      accept="application/json"
      @change="emit('import-profile', $event)"
      style="display: none"
      ref="importProfile"
    />
    <button
      style="color: white; background-color: green"
      class="profile-button"
      @click="emit('save', $event)"
    >
      Save
    </button>
    <button
      style="color: white; background-color: red"
      class="profile-button"
      @click="emit('remove', $event)"
    >
      Delete
    </button>
    <div>
      <button class="profile-button" @click="emit('rename', $event)">Rename</button>

      <button class="profile-button" @click="emit('add', $event)">New</button>

      <button class="profile-button" @click="triggerImport">Import</button>
    </div>
  </div>
</template>
