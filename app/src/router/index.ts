import { createRouter, createWebHistory, Router } from 'vue-router'
import HomeComponent from '@/components/contents/Home.component.vue'

export default (): Router => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        meta: {}
      }
    ]
  })
}
