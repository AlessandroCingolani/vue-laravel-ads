import { createRouter, createWebHistory } from 'vue-router'
import CookieView from '../views/CookieView.vue'

const routes = [
  {
    path: '/',
    name: 'cookie',
    component: CookieView
  },
  {
    path: '/session',
    name: 'session',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SessionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
