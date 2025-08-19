<template>
  <div class="relative w-full h-full overflow-hidden shadow-lg group ">
    <!-- Image -->
    <img :src="imageUrl" alt="" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>

    <!-- Content -->
    <div class="absolute bottom-0 p-5 w-full flex flex-col justify-end">
      <h1 class="text-2xl font-bold text-white truncate">{{ title }}</h1>
      <p
        class="text-white text-sm mt-1 max-h-24 overflow-hidden text-ellipsis"
        :class="{ 'max-h-full': expanded }"
      >
        {{ description }}
      </p>

      <!-- Voir plus / moins si description longue -->
      <button
        v-if="description.length > 150"
        @click="expanded = !expanded"
        class="text-blue-400 mt-1 text-sm hover:underline"
      >
        {{ expanded ? 'Voir moins' : 'Voir plus' }}
      </button>

      <!-- Action Icons -->
      <div class="mt-3 flex space-x-4">
        <a :href="viewUrl" target="_blank" class="text-white hover:text-blue-400 transition-colors duration-300">
          <font-awesome-icon :icon="['fas', 'eye']" class="text-2xl"/>
        </a>
        <a :href="githubUrl" target="_blank" class="text-white hover:text-blue-400 transition-colors duration-300">
          <font-awesome-icon :icon="['fab', 'github']" class="text-2xl"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String,
  viewUrl: String,
  githubUrl: String,
  imageUrl: String
})

const expanded = ref(false)
</script>

<style scoped>
/* Ajout d'ombre et bord arrondi */
.group:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}
</style>
