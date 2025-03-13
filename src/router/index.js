import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListMagasin from "@/views/ListMagasin.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ListMagasin',
    name: 'ListMagasin',
    component: ListMagasin,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
