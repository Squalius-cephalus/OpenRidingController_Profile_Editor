import { ref } from 'vue'
import type { Profile } from '../types/profiles'
import data from '../data/profiles.json'
export function useProfiles() {
  const profiles = ref<Profile[]>(data.profiles as Profile[])
  const selectedIndex = ref(0)

  return {
    profiles,
    selectedIndex,
  }
}
