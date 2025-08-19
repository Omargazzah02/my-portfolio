import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  , } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faYoutube ,  } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'


// Ajouter les icônes à la bibliothèque
library.add(faGithub, faLinkedin, faYoutube , faEye)

export default defineNuxtPlugin((nuxtApp) => {
  // Enregistrer le composant globalement
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
