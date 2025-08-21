<template class="w-full   ">
  <h1 class="title-bold text-center mb-8">Technologies</h1>

  <div
    class="grid grid-cols-3 lg:grid-cols-8 gap-6  w-full"
  >
    <div
      class="flex flex-col items-center text-center"
      v-for="skill in skills"
      :key="skill.title"
    >
      <!-- Icône responsive avec clamp -->
      <Icon
        :size="`clamp(40px, 5vw, 50px)`"
        :name="skill.icon"
        class="mb-2"
      />
      <!-- Texte -->
      <p class="text-sm sm:text-base md:text-lg text-white">
        {{ skill.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import skills from '@/data/skills.json'
import Icon from '@/components/utils/Icon.vue'
</script>
