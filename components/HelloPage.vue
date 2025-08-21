<template>
  <nav class="flex justify-center p-4">
   <span class="flex   max-lg:flex-col   items-center max-lg:gap-9   ">
     <h1 class="text-white font-bold text-3xl sm:text-4xl text-center">
      Mon <span class="text-[var(--primary-color)]">Portfolio</span>

    </h1>
    <img src="/public/images/starts.webp" alt="" class=' w-20 max-lg:w-16 max-lg:hidden'>
   </span>
  </nav>


  <div class="flex flex-col-reverse lg:flex-row items-center lg:justify-around px-4 lg:px-12 -mt-10 ">
    <!-- Colonne gauche -->
    <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-12  lg:mt-0">
      <!-- Rectangel -->
      

            <div>
              <img src="/public/images/rectangle.png" alt="" class=" h-28 max-lg:hidden">
            </div>


      <!-- Texte -->
      <div class="flex flex-col text-white text-center lg:text-left gap-2 lg:gap-6 max-lg:items-center ">
        <p class=" text-2xl">Bonjour</p>
        <h1 class="text-2xl sm:text-3xl font-semibold">Je suis <span class="text-[var(--primary-color)]"> Omar Gazzah </span></h1>
        <p class="text-base sm:text-lg">Développeur full stack junior</p>
        <a class="button-blue " href="https://drive.google.com/file/d/1MSwJuiXBNk2NkTXIN3ueu9bo7xQLvZgN/view" target="_blank" rel="noopener noreferrer" >Voir mon CV</a>
      </div>
    </div>

    <!-- Colonne droite (image) -->
    <div class="mt-8 lg:mt-0  max-lg:w-64 w-[400px]">
      <img src="/images/photo-omar.png" alt="Photo Omar" class="w-full"/>
    </div>
  </div>
</template>
