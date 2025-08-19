<template>
  <nav class="flex justify-center p-4">
    <h1 class="text-white font-bold text-4xl sm:text-5xl text-center max-lg:-mb-8">
      Mon <span class="text-[var(--primary-color)]">Portfolio</span>
    </h1>
  </nav>

  <div class="flex flex-col-reverse lg:flex-row items-center lg:justify-around px-4 lg:px-12 ">
    <!-- Colonne gauche -->
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mt-6 lg:mt-0">
      <!-- Réseaux sociaux -->
      <div class="flex flex-row lg:flex-col gap-4 text-white">
        <a href="https://github.com/tonpseudo">
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>
        <a href="">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </a>
      </div>

      <!-- Texte -->
      <div class="flex flex-col text-white text-center lg:text-left gap-2 lg:gap-6 ">
        <p class="text-sm sm:text-base">Bonjour</p>
        <h1 class="text-2xl sm:text-3xl font-semibold">Je suis Omar Gazzah</h1>
        <p class="text-base sm:text-lg">Développeur full stack junior</p>
        <a class="button-blue" href="https://drive.google.com/file/d/1MSwJuiXBNk2NkTXIN3ueu9bo7xQLvZgN/view" target="_blank" rel="noopener noreferrer">Voir mon CV</a>
      </div>
    </div>

    <!-- Colonne droite (image) -->
    <div class="mt-8 lg:mt-0  max-lg:w-64 w-[450px]">
      <img src="/images/photo-omar.png" alt="Photo Omar" class="w-full"/>
    </div>
  </div>
</template>
