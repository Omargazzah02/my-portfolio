<template>
  <div class="relative w-full min-h-[300px] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 border-2 border-[var(--secondary-color)]">
    <!-- Image -->
    <img
      :src="imageUrl"
      alt=""
      class="w-full h-full  transition-transform duration-700 group-hover:scale-110 max-lg:object-cover"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

    <!-- Contenu -->
    <div class="absolute bottom-0 p-5 w-full flex flex-col justify-end">
      <!-- Titre -->
      <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg">
        {{ title }}
      </h1>

      <!-- Description -->
      <p
        ref="descRef"
        class="text-white text-xs mt-2 transition-all duration-500"
        :class="expanded ? 'line-clamp-none' : 'line-clamp-2'"
        :style="!expanded ? clampStyle : {}"
      >
        {{ description }}
      </p>

      <!-- Bouton Lire plus / moins -->
      <button
        v-if="showToggle"
        @click="expanded = !expanded"
        class="text-blue-400 text-xs mt-1 hover:text-blue-300 hover:underline self-start transition-colors duration-300"
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

// CSS clamp pour 2 lignes
const clampStyle = {
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

onMounted(async () => {
  await nextTick()
  if (descRef.value) {
    // Le bouton "Lire plus" apparaît seulement si le texte dépasse 2 lignes
    showToggle.value = descRef.value.scrollHeight > descRef.value.clientHeight
  }
})
</script>
