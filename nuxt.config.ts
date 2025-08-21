import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app:{
    head:{
      title :'Mon Portfolio',
       link: [
        { rel: 'icon', type: 'image/png', href: '/images/photo-omar.png' }
      ]
    }

  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
   css: ['~/assets/css/main.css',
        "@fontsource/cascadia-code/index.css"
   ],

  vite :{
    plugins :  [tailwindcss() , 


    ]
  }
})
