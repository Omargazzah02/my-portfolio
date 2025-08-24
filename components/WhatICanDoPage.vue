<template> 
  <h1 class="title-bold text-center mb-8"> Ce que je peux faire</h1>

  <div  class="flex flex-wrap items-center justify-center gap-8 w-full " >

    <div class=' border-2 border-[var(--primary-color)]  bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-full'>
<span class="flex gap-5 items-center">
        <h1 class="text-2xl  font-bold text-white   drop-shadow-lg max-lg:text-xl ">Conception </h1>     <font-awesome-icon :icon="['fas', 'pencil']"  class="text-white text-2xl max-lg:text-xl "  />

</span>
    <ul class="list-disc pl-5 space-y-2">
        <li>Bases de données relationnelles</li>
        <li>Diagrammes UML</li>
        <li>Architecture logicielle</li>
        <li>Conception fonctionnelle</li>
        <li>Design patterns (MVC, MVVM, MVP)</li>
    </ul>
    </div>



    
    <div class=' border-2 border-[var(--primary-color)]  bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-full'>
<span class="flex gap-5 items-center">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white   drop-shadow-lg ">Développement </h1>     <font-awesome-icon :icon="['fas', 'code']"  class="text-white text-2xl max-lg:text-xl" />

</span>
    <ul class="list-disc pl-5 space-y-2">
        <li>Interfaces responsives</li>
        <li>Sites web full stack</li>
        <li> Applications mobiles modernes</li>
        <li>Sites e-commerce</li>
        <li>API sécurisées</li>

    </ul>
    </div>



       <div class=' border-2 border-[var(--primary-color)]  bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-full'>
<span class="flex gap-5 items-center">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white   drop-shadow-lg">Design (UI/UX)  </h1>     <font-awesome-icon :icon="['fas', 'palette']"  class="text-white text-2xl max-lg:text-xl" />

</span>
    <ul class="list-disc pl-5 space-y-2">
        <li>Wireframes</li>
        <li>Maquettes</li>
        <li>Prototypes interactifs</li>
        <li>Chartes graphiques</li>

    </ul>
    </div>


        <div class=' border-2 border-[var(--primary-color)]  bg-[var(--blue-dark-color)] w-96 h-72 p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-full'>
<span class="flex gap-5 items-center" >
        <h1 class="text-2xl max-lg:text-xl font-bold text-white   drop-shadow-lg">DevOps et CI/CD  </h1>     <font-awesome-icon :icon="['fas', 'cogs']" class="text-white text-2xl max-lg:text-xl" />

</span>
    <ul class="list-disc pl-5 space-y-2">
        <li>Orchestration des pipelines</li>
        <li>Automatisation des tests</li>
       <li>Gestion des versions du code </li>

        <li>Conteneurisation des applications</li>
        <li>Supervision et gestion des serveurs
</li>

    </ul>
    </div>


    

        <div class=' border-2 border-[var(--primary-color)]  bg-[var(--blue-dark-color)] w-96  p-6 flex flex-col gap-4 text-white rounded-2xl max-lg:w-full max-lg:h-full'>
<span class="flex gap-5 items-center">
        <h1 class="text-2xl max-lg:text-xl font-bold text-white   drop-shadow-lg">Tests  </h1>     <font-awesome-icon :icon="['fas', 'bug']" class="text-white text-2xl max-lg:text-xl" />

</span>
    <ul class="list-disc pl-5 space-y-2">
        <li>Tests fonctionnels</li>
        <li>Tests unitaires</li>
       <li>Tests d’intégration</li>

        <li>Tests End-to-End (E2E)</li>
        <li>Tests de performance

</li>

<li>Tests de sécurité
</li>

    </ul>
    </div>











  </div>



  

</template>
