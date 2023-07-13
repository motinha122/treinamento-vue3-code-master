import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue');
const Feedbacks = () => import('../views/Feedbacks/index.vue');
const Credencials = () => import('../views/Credencials/index.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      component: Feedbacks,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credencials',
      name: 'Credencials',
      component: Credencials,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {name: 'Home'}
    },
  ]
})

export default router
