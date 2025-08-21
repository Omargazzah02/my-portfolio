<template>

  <h1 class="title-bold text-center"> Contact</h1>

<div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-10">
    

  <a class="border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer" href="https://www.linkedin.com/in/omar-gaz/" target="_blank">
    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="text-white" />
    <font-awesome-icon :icon="['fas', 'share']" size="2x" class="text-white" />
  </a>

  <a class="border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer" href="https://github.com/Omargazzah02" target="_blank">
    <font-awesome-icon :icon="['fab', 'github']" size="2x" class="text-white" />
    <font-awesome-icon :icon="['fas', 'share']" size="2x" class="text-white" />
  </a>

  <a class="border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer" href="mailto:gazzahomar2001@gmail.com">
    <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="text-white" />
    <font-awesome-icon :icon="['fas', 'share']" size="2x" class="text-white" />
  </a>

  <a class="border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer" href="tel:+330767708603">
    <font-awesome-icon :icon="['fas', 'phone']" size="2x" class="text-white" />
    <font-awesome-icon :icon="['fas', 'share']" size="2x" class="text-white" />
  </a>

  
</div>

     
        
    <div  class="w-full lg:p-7 flex  flex-col justify-between items-center lg:px-10  text-sm text-white mt-8 gap-3  max-lg:text-xs  text-center"> 
         <p>© 2025 Omar Gazzah. Tous droits réservés. <img src="" alt=""></p>

     <span class="flex space-x-3 items-center  max-lg:flex-col max-lg:space-y-2">   <p>Site développé avec Next.js et Tailwind CSS. </p> <span class="flex space-x-3"> <img src="/images/next.png" class=" w-6 h-6"/>  <img src="/images/tailwind.png" class=" w-8"/> </span> </span>
        </div>

</template>

