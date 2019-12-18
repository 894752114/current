import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/dashboard')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
