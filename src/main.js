// require('./bootstrap');

import {createApp} from 'vue'
import { createPinia } from 'pinia'

// import './bootstrap';
import './css/app.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount("#app")