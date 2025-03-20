import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListMagasin from "@/views/ListMagasin.vue";
import HistoriqueView from "@/views/HistoriqueView.vue";

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
  },
  {
    path: '/Historique',
    name: 'Historique',
    component: HistoriqueView,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
