import { createApp } from 'vue'
import App from './App.vue'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '@/app/styles/index.scss'
import router from '@/app/router/index.js'

createApp(App)
  .use(router)
  .mount('#app')
