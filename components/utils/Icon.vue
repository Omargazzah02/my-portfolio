<template>
  <svg
    v-if="iconData"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="iconData.viewBox"
    :width="size"
    :height="size"
    fill="white"
  >
    <path :d="iconData.path" />
  </svg>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as icons from 'simple-icons'

const { name, size = 24 } = defineProps({
  name: { type: String, required: true },
  size: {     type: [Number, String], }
})

const iconData = ref(null)

onMounted(() => {
  const key = `si${name.charAt(0).toUpperCase() + name.slice(1)}`
  const icon = icons[key]
  if (icon) {
    // simple-icons v6 expose path et viewBox
    iconData.value = { path: icon.path, viewBox: '0 0 24 24' }
  } else {
    console.warn(`Icône Simple Icons non trouvée: ${name}`)
  }
})
</script>
