import './assets/main.css'
import './assets/scss/main.scss'
import 'buefy/dist/buefy.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'

const app = createApp(App)

app.use(router)
app.use(Buefy)
app.mount('#app')
