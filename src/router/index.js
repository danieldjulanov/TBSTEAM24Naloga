import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NastanitveView from '../views/NastanitveView.vue'
import FavouritesView from '../views/FavouritesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nastanitve',
    name: 'nastanitve',
    component: NastanitveView,
    props: true,
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
