import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListMagasin from "@/views/ListMagasin.vue";
import HistoriqueView from "@/views/HistoriqueView.vue";
import DetailMagasin from "@/views/DetailMagasin.vue";
import EntrepotView from "@/views/EntrepotView.vue";

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
  },
  {
    path: "/DetailMagasin",
    name: "DetailMagasin",
    component: DetailMagasin,

  },
  {
    path: "/Entrepot/:id",
    name: "Entrepot",
    component: EntrepotView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
