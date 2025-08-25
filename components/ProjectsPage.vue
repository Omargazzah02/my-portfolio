<template>
 <div class="lg:px-5">
   <h1 class="title-bold text-center "> Mes projets</h1>

   
  <swiper
    :modules="[Pagination]"
    pagination
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
 </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import projects from '@/data/projects.json'

import 'swiper/css'
import 'swiper/css/pagination'

import ProjectCard from '@/components/utils/ProjectCard.vue'

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
  height: 350px;
  overflow: hidden;
  padding-bottom: 50px; /* espace pour les bullets */
  
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








/* Bullets inactifs */
::v-deep(.swiper-pagination-bullet) {
  background: #fff; /* blanc */
  opacity: 0.5;
  width: 9px;
  height: 9px;
  margin: 0 6px;
}

/* Bullet actif */
::v-deep(.swiper-pagination-bullet-active) {
  background: #fff; /* blanc */
  opacity: 1;
}
</style>


