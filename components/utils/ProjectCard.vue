<template>
  <div class="relative w-full min-h-[300px] overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-500">
    <!-- Image -->
    <img
      :src="imageUrl"
      alt=""
      class="w-full h-full transition-transform duration-500 group-hover:scale-105 max-lg:bg-cover"
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
        ref="descRef"
        class="text-white text-xs max-lg:text-xs mt-2 overflow-hidden transition-all duration-300"
        :class="expanded ? 'max-h-96' : 'max-h-20'"
      >
        {{ description }}
      </p>

      <!-- Bouton Lire plus / moins (affiché seulement si nécessaire) -->
      <button
        v-if="showToggle"
        @click="expanded = !expanded"
        class="text-blue-400 text-xs mt-1 hover:underline self-start"
      >
        {{ expanded ? "Lire moins" : "Lire plus" }}
      </button>

      <!-- Icônes d'action -->
      <div class="mt-3 flex space-x-4">
        <a
          v-if="viewUrl"
          :href="viewUrl"
          target="_blank"
          class="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <font-awesome-icon :icon="['fas', 'eye']" class="text-2xl" />
        </a>

        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          class="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

defineProps({
  title: String,
  description: String,
  viewUrl: String,
  githubUrl: String,
  imageUrl: String,
})

const expanded = ref(false)
const showToggle = ref(false)
const descRef = ref(null)

onMounted(async () => {
  await nextTick()
  if (descRef.value) {
    // Vérifie si le contenu dépasse la hauteur max de 80px (~ max-h-20)
    showToggle.value = descRef.value.scrollHeight > descRef.value.clientHeight
  }
})
</script>
