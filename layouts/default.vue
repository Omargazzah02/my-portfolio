<template>
   <section class=" rounded-2xl bg-gradient-to-r from-[var(--primary-color)] to-black p-7">

                          <div class="absolute w-28  z-10   top-8 left-30 max-lg:left-8  max-lg:w-20">   <img src="/images/emoji.png" alt="">  </div>


                      <div class="absolute w-40  z-10 max-lg:-top-5   right-8 cube-rotation  max-lg:w-36"  > <img src="/images/cube-blue.png" alt=""></div>
                      <div class="absolute  w-30  z-10  bottom-5 left-6 cube-rotation-reverse max-lg:hidden"  > <img src="/images/cube-blue.png" alt=""></div>
                      <div class="absolute  w-20  z-10  -bottom-15 left-30 cube-rotation max-lg:hidden"  > <img src="/images/cube-gray.png" alt=""></div>

             <div class="bg-[var(--backgroud-color)]  w-full h-full     flex flex-col p-4 ">


               <div class="p-8 px-10 space-y-28 max-lg:px-4">
                     <slot ></slot> 

               </div>
             </div>
             

   </section>
</template>