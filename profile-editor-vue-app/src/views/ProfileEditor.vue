<script setup lang="ts">
import ProfileSelect from '../components/ProfileSelect.vue'
import SettingsEditor from '../components/SettingsEditor.vue'
import ReinMode from '../components/ReinMode.vue'
import ButtonsEditor from '@/components/ButtonsEditor.vue'
import templateProfile from '../data/template_profile.json'
import type { Profile } from '../types/profiles'

import { computed } from 'vue'
import { useProfiles } from '../composables/useProfiles'
import NunchuckMode from '@/components/NunchuckMode.vue'

const { profiles, selectedIndex } = useProfiles()

const selectedProfile = computed(() => {
  return profiles.value[selectedIndex.value]
})

function loadProfiles(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  const reader = new FileReader()

  reader.onload = () => {
    const parsed = JSON.parse(reader.result as string)

    profiles.value = parsed.profiles
    selectedIndex.value = 0
  }

  reader.readAsText(file)
}

function saveProfiles() {
  const data = {
    profiles: profiles.value,
  }

  const json = JSON.stringify(data, null, 2)

  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'profiles.json'
  a.click()

  URL.revokeObjectURL(url)
}

function renameProfile() {
  const profile = selectedProfile.value
  if (!profile) return

  const newName = prompt('New profile name:', profile.Name)

  if (newName?.trim()) {
    profile.Name = newName.trim()
  }
}

function nameExists(name: string) {
  return profiles.value.some((p) => p.Name === name)
}

function addProfile() {
  const name = prompt('Enter profile name:')
  if (!name?.trim()) return

  if (nameExists(name)) {
    alert('Profile name already exists!')
    return
  }

  const newProfile = clone(templateProfile) as Profile

  newProfile.Name = name.trim()

  newProfile.Settings.LEDColor = [getRandomInt(), getRandomInt(), getRandomInt()] as [
    number,
    number,
    number,
  ]

  profiles.value = [...profiles.value, newProfile]

  selectedIndex.value = profiles.value.length - 1
}
function getRandomInt() {
  return Math.floor(Math.random() * 255)
}
function removeProfile() {
  if (profiles.value.length <= 1) {
    alert('You must have at least one profile')
    return
  }

  const profile = profiles.value[selectedIndex.value]

  if (!profile) return

  const confirmDelete = confirm(`Delete profile "${profile.Name}"?`)

  if (!confirmDelete) return

  const removedIndex = selectedIndex.value

  profiles.value.splice(removedIndex, 1)

  // If we deleted the last item,
  // move selection back one step
  if (selectedIndex.value >= profiles.value.length) {
    selectedIndex.value = profiles.value.length - 1
  }
}

function importProfile(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file) return

  const reader = new FileReader()

  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result as string)

      if (!Array.isArray(parsed.profiles)) {
        alert('Invalid profiles file')
        return
      }

      const list = parsed.profiles.map((p: Profile, i: number) => `${i}: ${p.Name}`).join('\n')

      const selected = prompt(`Select profile index to import:\n\n${list}`)

      if (selected === null) return

      const index = Number(selected)

      if (Number.isNaN(index) || index < 0 || index >= parsed.profiles.length) {
        alert('Invalid profile index')
        return
      }

      const profile = parsed.profiles[index] as Profile

      if (nameExists(profile.Name)) {
        alert('Profile name already exists!')
        return
      }

      profiles.value.push(profile)

      selectedIndex.value = profiles.value.length - 1
    } catch {
      alert('Invalid JSON file')
    }

    input.value = ''
  }

  reader.readAsText(file)
}

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
</script>

<template>
  <div class="editor">
    <div>
      <h1>Profile Editor</h1>
      <div class="section-row">
        <div class="section">
          <ProfileSelect
            :profiles="profiles"
            :selectedIndex="selectedIndex"
            @update:selectedIndex="selectedIndex = $event"
            @load="loadProfiles"
            @save="saveProfiles"
            @rename="renameProfile"
            @add="addProfile"
            @remove="removeProfile"
            @import-profile="importProfile"
          />
        </div>

        <div class="section">
          <SettingsEditor v-if="selectedProfile" v-model="selectedProfile.Settings" />
        </div>
      </div>

      <div class="section-row">
        <div class="section">
          <ReinMode v-if="selectedProfile" v-model="selectedProfile.ReinMode" />
        </div>
        <div class="section">
          <NunchuckMode v-if="selectedProfile" v-model="selectedProfile.NunchuckMode" />
        </div>
      </div>
      <div class="section">
        <ButtonsEditor v-if="selectedProfile" v-model="selectedProfile.Buttons" />
      </div>
    </div>
  </div>
</template>
<style>
body {
  font-family: sans-serif;
  background: #f3f4f6;
  margin: 0;
}

.editor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.editor > div {
  width: 100%;
  max-width: 800px;
}

/* Sections become clean cards */
.section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

.section-row {
  display: flex;
  gap: 16px;
}

/* Make both sections share space */
.section-row .section {
  flex: 1;
  min-width: 300px;
}

select,
input {
  box-sizing: border-box;
  padding: 3px 3px;
  margin-right: 10px;
  margin-bottom: 3px;
}

select {
  min-width: 150px;
}

input[type='number'] {
  width: 80px;
}
/* Buttons */
button {
  padding: 6px 10px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: gainsboro;
  margin-right: 10px;
}

button:hover {
  opacity: 0.8;
}

label {
  font-size: 14px;
  margin-right: 6px;
  display: inline-block;
  width: 40%;
}
</style>
