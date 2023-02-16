import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

createApp(App)
  .use(router())
  .mount('#app')

import './interceptors/RequestInterceptor'
import 'bootstrap/dist/js/bootstrap.js'
