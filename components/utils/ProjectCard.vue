<template>
  <div class="relative w-full min-h-[300px] overflow-hidden  shadow-lg group hover:shadow-2xl transition-shadow duration-500">
    <!-- Image -->
    <img
      :src="imageUrl"
      alt=""
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

    <!-- Contenu -->
    <div class="absolute bottom-0 p-5 w-full flex flex-col justify-end">
      <!-- Titre -->
      <h1 class="text-2xl max-lg:text-xl font-bold text-white truncate" :title="title">
        {{ title }}
      </h1>

      <!-- Description -->
      <p
        class="text-white text-sm max-lg:text-xs mt-2 overflow-hidden transition-all duration-300"
        :class="expanded ? 'max-h-full' : 'max-h-20'"
      >
        {{ description }}
      </p>

      <!-- Bouton Voir plus / Voir moins -->
      <button
        v-if="description.length > 150"
        @click="expanded = !expanded"
        class="mt-2 text-blue-400 text-sm hover:underline self-start"
      >
        {{ expanded ? 'Voir moins' : 'Voir plus' }}
      </button>

      <!-- Icônes d'action -->
      <div class="mt-3 flex space-x-4">
        <a :href="viewUrl" target="_blank" class="text-white hover:text-blue-400 transition-colors duration-300">
          <font-awesome-icon :icon="['fas', 'eye']" class="text-2xl" />
        </a>
        <a :href="githubUrl" target="_blank" class="text-white hover:text-blue-400 transition-colors duration-300">
          <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
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
  imageUrl: String,
})

const expanded = ref(false)
</script>

<style scoped>

</style>
