import { createApp } from 'vue'
import App from './App.vue'
import '@/app/styles/index.scss'
import router from '@/app/router/index.js'

createApp(App)
  .use(router)
  .mount('#app')
