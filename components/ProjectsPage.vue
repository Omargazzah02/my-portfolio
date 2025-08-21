<template>
  <h1 class="title-bold text-center"> Mes projets</h1>
  <swiper
    :modules="[Pagination, Navigation]"
    pagination
    navigation
    :space-between="20"
    :slides-per-view="1"
    :breakpoints="breakpoints"
    class="my-swiper"
  >
    
    <swiper-slide v-for="project in projects" :key="project.title"> 
      <ProjectCard
        class="w-full h-full"
        :title="project.title"
        :description="project.description"
        :imageUrl="project.imageUrl"
        :viewUrl="project.viewUrl"
        :githubUrl="project.githubUrl"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import projects from '@/data/projects.json'

// Import du CSS nécessaire pour Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import ProjectCard from '@/components/utils/ProjectCard.vue'

// Configuration responsive
const breakpoints = {
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
}
</script>

<style scoped>
.my-swiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

/* Slides */
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  font-size: 24px;
  height: 100%;
}

/* Pagination */
.swiper-pagination {
  bottom: 10px;
}

.swiper-pagination-bullet {
  background: #000;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #0070f3;
  opacity: 1;
}

/* Flèches navigation */
.swiper-button-prev,
.swiper-button-next {
  color: #0070f3; /* bleu */
  width: 30px;
  height: 30px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
}
</style>
