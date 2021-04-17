import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
    .use(VueSmoothScroll, {
        offset: -70
    })
    .mount('#app')
