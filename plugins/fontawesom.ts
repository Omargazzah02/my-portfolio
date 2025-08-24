import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  , } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faYoutube ,  } from '@fortawesome/free-brands-svg-icons'
import { faEye ,faShare , faEnvelope , faPhone , faPencil, faCode, faPalette, faCogs, faBug}  from '@fortawesome/free-solid-svg-icons'

// Ajouter les icônes à la bibliothèque
library.add(faGithub, faLinkedin, faYoutube , faEye , faShare , faEnvelope , faPhone ,faPencil  , faCode , faPalette, faCogs , faBug)

export default defineNuxtPlugin((nuxtApp) => {
  // Enregistrer le composant globalement
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
