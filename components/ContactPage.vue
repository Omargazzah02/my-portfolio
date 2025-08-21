<template>

<div>
    <h1 class="title-bold text-center">Contact</h1>
    <p class=' text-gray-400 text-sm text-center '>Vous avez une idée, un projet ou besoin d’aide ? N’hésitez pas à me contacter !</p>

</div>



    <div class=' w-full flex lg:px-10  gap-4 -mt-10  flex-wrap' >
        <a class='  border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer lg:flex-1 lg:max-w-1/2 max-lg:w-full ' href="https://www.linkedin.com/in/omar-gaz/" target="_blank">

          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class=" text-white" />
          <font-awesome-icon :icon="['fas', 'share']" size="2x" class=" text-white" />
  
              

        </a>
         <a class=' border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer lg:flex-1 lg:max-w-1/2 max-lg:w-full ' href="https://github.com/Omargazzah02" target="_blank">

          <font-awesome-icon :icon="['fab', 'github']" size="2x" class=" text-white" />
          <font-awesome-icon :icon="['fas', 'share']" size="2x" class=" text-white" />
  
              

        </a>
        
            <a class=' border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer lg:flex-1 lg:max-w-1/2 max-lg:w-full ' href="mailto:gazzahomar2001@gmail.com" >

          <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class=" text-white" />
          <font-awesome-icon :icon="['fas', 'share']" size="2x" class=" text-white" />
  
              

        </a>
        
        
            <a class=' border-[var(--secondary-color)] border-2 rounded-md p-4 flex justify-between hover:bg-blue-400 cursor-pointer lg:flex-1 lg:max-w-1/2 max-lg:w-full ' href="tel:+330767708603" >

          <font-awesome-icon :icon="['fas', 'phone']" size="2x" class=" text-white" />
          <font-awesome-icon :icon="['fas', 'share']" size="2x" class=" text-white" />
  
              

        </a>
        
        
        
   

        <div  class="w-full p-7 flex  flex-col justify-between items-center px-10 text-sm text-white mt-8 gap-3 "> 
         <p>© 2025 Omar Gazzah. Tous droits réservés. <img src="" alt=""></p>

     <span class="flex space-x-3 items-center">   <p>Site développé avec Next.js et Tailwind CSS. </p>  <img src="/images/next.png" class=" w-6 h-6"/>  <img src="/images/tailwind.png" class=" w-6"/>  </span>
        </div>

        
    </div>

</template>

