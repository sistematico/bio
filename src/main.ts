import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import 'bulma-calendar/dist/js/bulma-calendar.min.js'
import './assets/css/main.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(far)
library.add(fab)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
