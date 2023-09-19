import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUpRightFromSquare, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { MotionPlugin } from '@vueuse/motion'
import vue3lottie from 'vue3-lottie'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


library.add(faFile, faGithub, faLinkedin, faTwitter, faInstagram, faLinkedinIn, faArrowUpRightFromSquare, faBarsStaggered, faXmark)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(vue3lottie)

app.mount('#app')
