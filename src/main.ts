import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import cardComponent from './components/cardComponent/cardComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('CardComponent', cardComponent)
