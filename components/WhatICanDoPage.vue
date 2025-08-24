<template>
  <h1 class="title-bold text-center mb-8">Ce que je peux faire</h1>

  <div class="flex flex-wrap items-center justify-center gap-8 w-full">

    <!-- Carte Conception -->
    <div class="border-4 max-lg:border-2 border-[var(--primary-color)] bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-auto">
      <span class="flex flex-wrap items-center gap-2">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg break-words">Conception</h1>
        <font-awesome-icon :icon="['fas', 'pencil']" class="text-white text-2xl max-lg:text-xl flex-shrink-0" />
      </span>
      <ul class="list-disc pl-5 space-y-2 max-lg:text-sm">
        <li>Bases de données relationnelles</li>
        <li>Diagrammes UML</li>
        <li>Architecture logicielle</li>
        <li>Conception fonctionnelle</li>
        <li>Design patterns (MVC, MVVM, MVP)</li>
      </ul>
    </div>

    <!-- Carte Développement -->
    <div class="border-4 max-lg:border-2 border-[var(--primary-color)] bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-auto">
      <span class="flex flex-wrap items-center gap-2">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg break-words">Développement</h1>
        <font-awesome-icon :icon="['fas', 'code']" class="text-white text-2xl max-lg:text-xl flex-shrink-0" />
      </span>
      <ul class="list-disc pl-5 space-y-2 max-lg:text-sm">
        <li>Interfaces responsives</li>
        <li>Sites web full stack</li>
        <li>Applications mobiles modernes</li>
        <li>Sites e-commerce</li>
        <li>API sécurisées</li>
      </ul>
    </div>

    <!-- Carte Design (UI/UX) -->
    <div class="border-4 max-lg:border-2 border-[var(--primary-color)] bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-auto">
      <span class="flex flex-wrap items-center gap-2">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg break-words">Design (UI/UX)</h1>
        <font-awesome-icon :icon="['fas', 'palette']" class="text-white text-2xl max-lg:text-xl flex-shrink-0" />
      </span>
      <ul class="list-disc pl-5 space-y-2 max-lg:text-sm">
        <li>Wireframes</li>
        <li>Maquettes</li>
        <li>Prototypes interactifs</li>
        <li>Chartes graphiques</li>
      </ul>
    </div>

    <!-- Carte DevOps et CI/CD -->
    <div class="border-4 max-lg:border-2 border-[var(--primary-color)] bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-auto">
      <span class="flex flex-wrap items-center gap-2">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg break-words">DevOps et CI/CD</h1>
        <font-awesome-icon :icon="['fas', 'cogs']" class="text-white text-2xl max-lg:text-xl flex-shrink-0" />
      </span>
      <ul class="list-disc pl-5 space-y-2 max-lg:text-sm">
        <li>Orchestration des pipelines</li>
        <li>Automatisation des tests</li>
        <li>Gestion des versions du code</li>
        <li>Conteneurisation des applications</li>
        <li>Supervision et gestion des serveurs</li>
      </ul>
    </div>

    <!-- Carte Tests -->
    <div class="border-4 max-lg:border-2 border-[var(--primary-color)] bg-[var(--blue-dark-color)] w-96 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-auto">
      <span class="flex flex-wrap items-center gap-2">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white drop-shadow-lg break-words">Tests</h1>
        <font-awesome-icon :icon="['fas', 'bug']" class="text-white text-2xl max-lg:text-xl flex-shrink-0" />
      </span>
      <ul class="list-disc pl-5 space-y-2 max-lg:text-sm">
        <li>Tests fonctionnels</li>
        <li>Tests unitaires</li>
        <li>Tests d’intégration</li>
        <li>Tests End-to-End (E2E)</li>
        <li>Tests de performance</li>
        <li>Tests de sécurité</li>
      </ul>
    </div>

  </div>
</template>
