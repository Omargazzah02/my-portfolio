<template>
  <div class="lg:px-5 relative">
    <h1 class="title-bold text-center mb-5">Mes projets</h1>

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

      <!-- Flèches personnalisées -->
      <template #navigation-prev>
        <div class="custom-swiper-button prev">&larr;</div>
      </template>
      <template #navigation-next>
        <div class="custom-swiper-button next">&rarr;</div>
      </template>

    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import projects from '@/data/projects.json'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import ProjectCard from '@/components/utils/ProjectCard.vue'

const breakpoints = {
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}
</script>

<style scoped>
.my-swiper {
  width: 100%;
  height: 350px;
  padding-bottom: 50px;
}

/* Slides */
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  font-size: 24px;
  border-radius: 10px;
  height: 100%;
}

/* Pagination bullets */
::v-deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.5;
  width: 9px;
  height: 9px;
  margin: 0 6px;
}
::v-deep(.swiper-pagination-bullet-active) {
  background: #fff;
  opacity: 1;
}

/* Flèches personnalisées */
.custom-swiper-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: blue;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  user-select: none;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  transition: background-color 0.3s;
}
.custom-swiper-button:hover {
  background-color: #4da6ff;
}

/* Position gauche / droite */
.custom-swiper-button.prev { left: -25px; }
.custom-swiper-button.next { right: -25px; }

/* Masquer sur mobile */
@media (max-width: 1023px) {
  .custom-swiper-button { display: none; }
}
</style>
